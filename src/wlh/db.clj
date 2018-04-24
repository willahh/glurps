(ns wlh.db
  (:require [clojure.java.jdbc :as jdbc]
            [honeysql.core :as sql]

            [wlh.logger :as logger]
            ))

(defmacro query [db-spec sql-params]
  "Do a query with jdbc, log the request"
  `(let [query# ~sql-params]
     (logger/info (str "[db] " query#))
     (jdbc/query ~db-spec query#)))

(defn insert [db-spec table cols row]
  (let [rows (into [] (map (fn [col]
                             (row (keyword col))) cols))]
    (jdbc/insert! db-spec table cols rows)))

(defn insert2 [db-spec table cols row]
  (let [rows (into [] (map (fn [col]
                             (row (keyword col))) cols))]
    (jdbc/insert! db-spec table cols rows)))

(defn update2 [db-spec table set-map where-clause]
  (jdbc/update! db-spec table set-map where-clause))

(defn delete [db-spec table-name id]
  (jdbc/delete! db-spec table-name [(str "id = " id)]))

(defn query2 [db-spec sql-map offset limit]
  (jdbc/query db-spec (sql/format (sql/build sql-map :offset offset :limit limit)))
  )
