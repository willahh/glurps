(ns glurps.model.asset.asset-dao
  (:require [glurps.config :as config]
            [wlh.db :as db]
            [glurps.model.asset.asset-model :as asset-model]))

(def schema 
  "Map of the database schema."
  {:table-name "glu_asset"
   :cols (asset-model/get-fields)})

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

(defn get-list-disable [params offset limit]
  (db/query (config/get :db-spec)
            (db/get-sql-map-from-params 
             (:table-name schema)
             (merge params {:active 0})
             (get-clauses params))
            offset
            limit))

(defn insert [actor-record]
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

(defn fav [id]
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:fav 1} [(str "id = " id)]))

(defn unfav [id]
  (db/update! (config/get :db-spec) (schema :table-name) 
              {:fav 0} [(str "id = " id)]))

(defn find-by-id [id]
  (first (db/query-old (config/get :db-spec) (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"id\" = '" id "'"))))

(defn- get-count [col]
  (first (rest (first (first col)))))

(defn count []
  (get-count (db/query-old (config/get :db-spec)
                           (str "SELECT COUNT(*) FROM \"" (:table-name schema) "\""))))
