(ns wlh.db
  (:require [clojure.java.jdbc :as jdbc]
            [wlh.logger :as logger]))

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
