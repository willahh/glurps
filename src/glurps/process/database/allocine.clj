(ns glurps.process.database.allocine
  (:require [glurps.config :as config]
            [clojure.java.jdbc :as jdbc]))

(def db-name (config/get :database-allocine))
(def db-spec {:classname "org.sqlite.JDBC"
              :subprotocol "sqlite"
              :subname db-name})

(defn insert [table cols row]
  (let [rows (map (fn [col]
                    (row (keyword col))) cols)]
    (jdbc/insert! db-spec table cols rows)))