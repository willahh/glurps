(ns glurps.model.movie.movie
  (:require [glurps.config :as config]
            [wlh.db :as db]))

(def table-name "glu_movie")
(def cols ["id" "alloid" "title" "description" "date" "director" "actors" "genre" "image" "notepress" "notespectator"])
(def cols-to-insert (filter #(not= % "id") cols))

(defn find-by-alloid [alloid]
  (db/query-old (config/get :db-spec) (str "SELECT * FROM \"" table-name "\" WHERE \"alloid\" = '" alloid "'")))
