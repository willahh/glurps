(ns glurps.model.movie
  (:require [glurps.util.db :as db]
            [glurps.util.db-allocine :as db-allocine]))

(def table-name "movie")
(def cols ["id" "alloid" "title" "description" "date" "director" "actors" "genre" "image" "notepress" "notespectator"])
(def cols-to-insert (filter #(not= % "id") cols))

(defn insert [row]
  "row is a map of database column name as key and database value as value"
  (db-allocine/insert (keyword table-name) cols-to-insert row))

(defn find-by-alloid [alloid]
  (db/query db-allocine/db-spec (str "SELECT * FROM \"" table-name "\" WHERE \"alloid\" = '" alloid "'")))
