(ns glurps.process.scrapper-allocine.update-db
  (:require [glurps.model.movie :as model-movie]
            [glurps.process.scrapper-allocine.movie :as scrapper-movie]))

(defn insert-movie [alloid]
  (let [movie-row-data (scrapper-movie/get-fields-from-id alloid)]
    (model-movie/insert {:actors "TODO"
                         :genre "TODO"
                         :date (movie-row-data :date)
                         :alloid (movie-row-data :id)
                         :notespectator ((movie-row-data :note) :spectator)
                         :title (movie-row-data :title)
                         :description (movie-row-data :description)
                         :director (movie-row-data :director)
                         :notepress ((movie-row-data :note) :presse)})))



;; Test
(insert-movie "229831")
(insert-movie "254378")
(insert-movie "246009")