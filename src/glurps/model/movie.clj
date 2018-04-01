(ns glurps.model.movie
  (:require [glurps.process.database.allocine :as db-allocine]))

(defn insert [])

;; (def cols ["id" "alloid" "title" "description" "date" "director" "actors" "genre" "image" "notepress" "notespectator"])
(def cols ["alloid" "title" "description" "date" "director" "actors" "genre" "image" "notepress" "notespectator"])

(db-allocine/insert :movie cols {:actors "Actor a"
                                 :genre "Genre a"
                                 :image "image.jpg"
                                 :date "2018-10-20"
                                 :alloid "100"
                                 :notespectator 0.2
                                 :title "test"
                                 :description "description"
                                 :director "Director a"
                                 :notepress 1})
