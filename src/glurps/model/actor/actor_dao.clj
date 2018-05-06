(ns glurps.model.actor.actor-dao
  (:require [glurps.config :as config]
            [wlh.db :as db]
            [glurps.model.actor.actor-model :as actor]))

(def schema 
  "Map of the database schema."
  {:table-name "glu_actor"
   :cols (actor/get-fields)})

(defn- bool-to-int [bool]
  "Cast boolean into an integer 1 or 0."
  (if bool 1 0))

(defn- get-clauses [params]
  "Takes a `params` map and returns a clauses vector that will be used by honeysql.
  `params` represents the page parameters. e.g POST, GET, parameters."
  (let [and (conj []
                  (when (:fav params)
                    [:= :fav 1])
                  (when (:active params)
                    [:= :active (bool-to-int (:active params))]))
        and-clean (into [] (filter second and))]
    
    (if (= (count and-clean) 1)
      {:where (first and-clean)}
      (if (> (count and-clean) 1)
        {:where
         (into [] (cons :and and-clean))}))))

(defn get-list [params offset limit]
  (db/query (config/get :db-spec)
            (db/get-sql-map-from-params (:table-name schema) params (get-clauses params))
            offset
            limit))

(defn get-list-disable [params offset limit & args]
  (db/query-old (config/get :db-spec)
                (str "SELECT * FROM \"glu_actor\" WHERE \"active\" = '0' LIMIT " limit " OFFSET " offset)))

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

(defn- get-count [col]
  (first (rest (first (first col)))))

(defn enable [id]
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:active 1} [(str "id = " id)]))

(defn disable [id]
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:active 0} [(str "id = " id)]))

(defn find-by-name [name]
  (db/query-old (config/get :db-spec) (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"name\" = '" name "'")))

(defn find-by-id [id]
  (first (db/query-old (config/get :db-spec) (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"id\" = '" id "'"))))

(defn count []
  (get-count (db/query-old (config/get :db-spec)
                           (str "SELECT COUNT(*) FROM \"" (schema :table-name) "\""))))

(defn find-actor-by-name-list [actor-name-list]
  "Find rows of actor by a list of actor name"
  (filter #(some? %)
          (let [actors actor-name-list]
            (for [actor actors]
              (if-let [actor-row (first (find-by-name actor))]
                actor-row)))))

(defn fav [id]
  "Set record to favorite"
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:fav 1} [(str "id = " id)]))

(defn unfav [id]
  "Unset record to favorite"
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:fav 0} [(str "id = " id)]))