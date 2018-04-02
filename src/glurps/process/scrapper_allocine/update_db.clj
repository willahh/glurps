(ns glurps.process.scrapper-allocine.update-db
  (:require [glurps.model.movie :as model-movie]
            [glurps.model.actor :as model-actor]
            [glurps.model.movie-actor :as model-movie-actor]
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




(defn insert-into-model-movie-from-movie-row-data [movie-row-data]
  "Take a movie-row-data retrieved from html and insert into movie_actor relation table"
  (when (some? movie-row-data)
    (let [actor-id-list (let [actors (model-actor/find-actor-by-name-list (movie-row-data :actors))]
                          (map #(% :id) actors))
          movie-id (movie-row-data :id)]
      (for [actor-id actor-id-list]
        (model-movie-actor/insert {:movie_id movie-id
                                   :actor_id actor-id})))))







;; test
(def temp {:genre ["Science fiction" "Action"],
           :description "Ready Player One",
           :date "28 mars 2018",
           :director "Steven Spielberg",
           :title "Ready Player One",
           :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
           :actors ["Tye Sheridan" "Olivia Cooke" "Ben Mendelsohn" "Lena Waithe"],
           :id "229831",
           :image
           "http://fr.web.img5.acsta.net/c_215_290/pictures/18/02/14/09/15/3437390.jpg"}
  )
(insert-into-model-movie-from-movie-row-data temp)






