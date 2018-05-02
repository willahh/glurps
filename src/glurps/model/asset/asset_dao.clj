(ns glurps.model.user.asset-dao
  (:require [wlh.db :as db]
            [glurps.process.db.db-allocine :as db-allocine]
            [glurps.model.user.asset-model :as asset-model]))

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
            (db/get-sql-map-from-params asset-model/table-name params (get-clauses params))
            offset
            limit))

(defn- get-count [col]
  (first (rest (first (first col)))))

(defn count []
  (get-count (db/query-old db-allocine/db-spec
                           (str "SELECT COUNT(*) FROM \"" asset-model/table-name "\""))))
