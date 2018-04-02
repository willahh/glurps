(ns glurps.model.actor
  (:require [glurps.process.database.allocine :as db-allocine]
            [clojure.java.jdbc :as jdbc]))

;; (def cols ["id" "alloid" "name" "job" "nationality" "age" "birth-date" "biography" "filmography" "picture"])
(def cols ["alloid" "name" "job" "nationality" "age" "birth-date" "biography" "filmography" "picture"])

(defn insert [row]
  "row is a map of database column name as key and database value as value"
  (db-allocine/insert :actor cols row))

(defn get-by-name [name]
  (jdbc/query db-allocine/db-spec (str "SELECT * FROM \"actor\" WHERE \"name\" = '" name "'")))

(defn find-actor-by-name-list [actor-name-list]
  "Find rows of actor by a list of actor name"
  (filter #(some? %)
          (let [actors actor-name-list]
            (for [actor actors]
              (if-let [actor-row (first (get-by-name actor))]
                actor-row)))))
