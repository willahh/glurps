(ns wlh.db
  (:require [clojure.java.jdbc :as jdbc]
            [honeysql.core :as sql]
            [wlh.logger :as logger]))

(defn get-sql-map-from-params [table-name params & clauses]
  "Takes a `params` map and returns a honeysql sql-map.
  `params` represents the page parameters. e.g POST, GET, parameters."
  (conj {}
        {:select [:*]}
        {:from [(keyword table-name)]}
        (when clauses (first clauses))
        (when (:order params)
          {:order-by [[(keyword (:order params))
                       (if (= (:asc params) "1")
                         :asc :desc)]]})))

(defmacro query-old [db-spec sql-params]
  "Do a query with jdbc, log the request"
  `(let [query# ~sql-params]
     (logger/info (str "[db] " query#))
     (jdbc/query ~db-spec query#)))

(defn insert [db-spec table cols row]
  (let [rows (into [] (map (fn [col]
                             (row (keyword col))) cols))]
    (jdbc/insert! db-spec table cols rows)))

(defn update! [db-spec table set-map where-clause]
  (jdbc/update! db-spec table set-map where-clause))

(defn delete [db-spec table-name id]
  (jdbc/delete! db-spec table-name [(str "id = " id)]))

(defn query [db-spec sql-map offset limit]
  (let [query (sql/format (sql/build sql-map :offset offset :limit limit))]
    (logger/info (str "[db]" query))
    (jdbc/query db-spec query)))
