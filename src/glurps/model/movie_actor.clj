(ns glurps.model.movie-actor
  (:require [glurps.process.database.allocine :as db-allocine]
            [clojure.java.jdbc :as jdbc]))

(def table-name "movie_actor")
(def cols ["id" "movie_id" "actor_id"])
(def cols-to-insert (filter #(not= % "id") cols))

(defn insert [row]
  "row is a map of database column name as key and database value as value"
  (db-allocine/insert (keyword table-name) cols-to-insert row))
