(ns glurps.model.actor
  (:require [glurps.process.database.allocine :as db-allocine]
            [clojure.java.jdbc :as jdbc]))

(def table-name "actor")
(def cols ["id" "alloid" "name" "job" "nationality" "age" "birthdate" "biography" "filmography" "picture"])
(def cols-to-insert (into [] (filter #(not= % "id") cols)))

(defn insert [row]
  "row is a map of database column name as key and database value as value"
  (db-allocine/insert (keyword table-name) cols-to-insert row))

(defn get-by-name [name]
  (jdbc/query db-allocine/db-spec (str "SELECT * FROM \"" table-name "\" WHERE \"name\" = '" name "'")))

(defn get-list [offset limit]
  (jdbc/query db-allocine/db-spec (str "SELECT * FROM \"actor\" LIMIT " limit " OFFSET " offset)))

(defn find-actor-by-name-list [actor-name-list]
  "Find rows of actor by a list of actor name"
  (filter #(some? %)
          (let [actors actor-name-list]
            (for [actor actors]
              (if-let [actor-row (first (get-by-name actor))]
                actor-row)))))



(get-list 1 2)