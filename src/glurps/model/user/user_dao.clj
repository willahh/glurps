(ns glurps.model.user.user-dao
  (:require [glurps.config :as config]
            [wlh.db :as db]
            [glurps.model.user.user-model :as user-model]))

(def schema
  {:table-name "glu_user"
   :cols (user-model/get-fields)})

(defn- bool-to-int [bool]
  "Cast boolean into an integer 1 or 0."
  (if bool 1 0))

(defn- get-count [col]
  (first (rest (first (first col)))))

(defn count3 []
  (get-count (db/query-old (config/get :db-spec)
                           (str "SELECT COUNT(*) FROM \"" (schema :table-name) "\""))))

(defn- get-clauses [params]
  "Takes a `params` map and returns a clauses vector that will be used by honeysql.
  `params` represents the page parameters. e.g POST, GET, parameters."
  (let [and (conj []
                  (when (:fav params)
                    [:= :user.fav 1])
                  (when (:active params)
                    [:= :user.active (bool-to-int (:active params))]))
        and-clean (into [] (filter second and))]

    (if (= (count and-clean) 1)
      {:where (first and-clean)}
      (if (> (count and-clean) 1)
        {:where
         (into [] (cons :and and-clean))}))))

(defn get-list [params offset limit]
  (let [clause (db/get-clause-from-params params (get-clauses params))]
    (db/query (config/get :db-spec)
              (conj 
               {:select [:user.id :user.active :user.date_create :user.login :user.password :user.first_name :user.last_name :user.email :ug.group_id [:g.name "group_name"]]
                :from [[:glu_user :user]]}
               clause
               {:merge-left-join [[:glu_user_group :ug]
                                  [:= :user.id :ug.user_id]

                                  [:glu_group :g]
                                  [:= :ug.group_id :g.id]]}) offset limit)))

(defn find-by-id [id]
  (first (db/query-old (config/get :db-spec) (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"id\" = '" id "'"))))

(defn get-list-disable [params offset limit & args]
  (db/query-old (config/get :db-spec)
                (str "SELECT * FROM \"glu_user\" WHERE \"active\" = '0' LIMIT " limit " OFFSET " offset)))

(defn insert [actor-record]
  "Takes a record actor, insert it in the database."
  (db/insert (config/get :db-spec)
             (:table-name schema)
             (:cols schema)
             (into {} actor-record)))

(defn update! [set-map where-clause]
  (db/update! (config/get :db-spec) (schema :table-name) set-map where-clause))

(defn delete [id]
  (db/delete (config/get :db-spec) (schema :table-name) id))

(defn enable [id]
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:active 1} [(str "id = " id)]))

(defn disable [id]
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:active 0} [(str "id = " id)]))

(defn fav [id]
  "Set record to favorite"
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:fav 1} [(str "id = " id)]))

(defn unfav [id]
  "Unset record to favorite"
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:fav 0} [(str "id = " id)]))

(defn find-user-list-from-group-id [params group-id offset limit]
  (let [clause (db/get-clause-from-params params (get-clauses params))]
    (filter #(= (:group_id %) group-id)
            (db/query (config/get :db-spec)
                      (conj 
                       {:select [:user.id :user.active :user.date_create :user.login :user.password :user.first_name :user.last_name :user.email :ug.group_id]
                        :from [[:glu_user :user]]}
                       ;; clause
                       {:join [[:glu_user_group :ug] [:= :user.id :user_id]]})
                      offset
                      limit))))
