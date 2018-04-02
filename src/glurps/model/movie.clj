(ns glurps.model.movie
  (:require [glurps.process.database.allocine :as db-allocine]
            [clojure.java.jdbc :as jdbc]))

(def cols ["alloid" "title" "description" "date" "director" "actors" "genre" "image" "notepress" "notespectator"])

(defn insert [row]
  "row is a map of database column name as key and database value as value"
  (db-allocine/insert :movie cols row))

(defn find-by-alloid [alloid]
  (jdbc/query db-allocine/db-spec (str "SELECT * FROM \"movie\" WHERE \"alloid\" = '" alloid "'")))

