(ns glurps.util.db
  (:require [clojure.java.jdbc :as jdbc]
            [glurps.util.logger :as logger]
            [glurps.util.db-allocine :as db-allocine]))

(defmacro query [db-spec sql-params]
  "Do a query with jdbc, add a log with the request"
  `(let [query# ~sql-params]
     (logger/log query#)
     (jdbc/query ~db-spec query#)))
