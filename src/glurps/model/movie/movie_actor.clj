(ns glurps.model.movie.movie-actor
  (:require [clojure.java.jdbc :as jdbc]))

(def table-name "movie_actor")
(def cols ["id" "movie_id" "actor_id"])
(def cols-to-insert (filter #(not= % "id") cols))
