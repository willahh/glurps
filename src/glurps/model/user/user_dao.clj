(ns glurps.model.user.user-dao
  (:require [wlh.db :as db]
            [glurps.process.db.db-allocine :as db-allocine]
            [glurps.model.user.user-model :as user-model]))

(def schema
  {:table-name "user"
   :cols (user-model/get-fields)})

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
  (db/query db-allocine/db-spec
            (db/get-sql-map-from-params (:table-name schema) params (get-clauses params))
            offset
            limit))

(defn- get-count [col]
  (first (rest (first (first col)))))

(defn count []
  (get-count (db/query-old db-allocine/db-spec
                           (str "SELECT COUNT(*) FROM \"" (schema :table-name) "\""))))
(defn find-by-id [id]
  (first (db/query-old db-allocine/db-spec (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"id\" = '" id "'"))))

(defn get-list-disable [params offset limit & args]
  (db/query-old db-allocine/db-spec
                (str "SELECT * FROM \"actor\" WHERE \"active\" = '0' LIMIT " limit " OFFSET " offset)))

(defn insert [actor-record]
  "Takes a record actor, insert it in the database."
  (db/insert db-allocine/db-spec
             (:table-name schema)
             (:cols schema)
             (into {} actor-record)))

(defn update! [set-map where-clause]
  (db/update! db-allocine/db-spec (schema :table-name) set-map where-clause))

(defn delete [id]
  (db/delete db-allocine/db-spec (schema :table-name) id))

(defn enable [id]
  (db/update! db-allocine/db-spec (schema :table-name) 
              {:active 1} [(str "id = " id)]))

(defn disable [id]
  (db/update! db-allocine/db-spec (schema :table-name) 
              {:active 0} [(str "id = " id)]))

(defn fav [id]
  "Set record to favorite"
  (db/update! db-allocine/db-spec (schema :table-name) 
              {:fav 1} [(str "id = " id)]))

(defn unfav [id]
  "Unset record to favorite"
  (db/update! db-allocine/db-spec (schema :table-name) 
              {:fav 0} [(str "id = " id)]))