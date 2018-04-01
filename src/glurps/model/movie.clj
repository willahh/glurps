(ns glurps.model.movie
  (:require [glurps.process.database.allocine :as db-allocine]))

(def cols ["alloid" "title" "description" "date" "director" "actors" "genre" "image" "notepress" "notespectator"])

(defn insert [row]
  "row is a map of database column name as key and database value as value"
  (db-allocine/insert :movie cols row))
