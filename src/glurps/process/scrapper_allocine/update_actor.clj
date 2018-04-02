(ns glurps.process.scrapper-allocine.update-actor
  (:require [glurps.model.actor :as model-actor]
            [glurps.process.scrapper-allocine.actor :as scrapper-actor2]))

;; (defn insert-movie [alloid]
;;   (let [movie-row-data (scrapper-movie/get-fields-from-id alloid)]
;;     (model-movie/insert {:actors "TODO"
;;                          :genre "TODO"
;;                          :date (movie-row-data :date)
;;                          :alloid (movie-row-data :id)
;;                          :notespectator ((movie-row-data :note) :spectator)
;;                          :title (movie-row-data :title)
;;                          :description (movie-row-data :description)
;;                          :director (movie-row-data :director)
;;                          :notepress ((movie-row-data :note) :presse)})))

;; (defn insert-into-model-movie-from-movie-row-data [movie-row-data]
;;   "Take a movie-row-data retrieved from html and insert into movie_actor relation table"
;;   (when (some? movie-row-data)
;;     (let [actor-id-list (let [actors (model-actor/find-actor-by-name-list (movie-row-data :actors))]
;;                           (map #(% :id) actors))
;;           movie-id (movie-row-data :id)]
;;       (for [actor-id actor-id-list]
;;         (model-movie-actor/insert {:movie_id movie-id
;;                                    :actor_id actor-id})))))

;; (model-actor/insert {:id ""
;;                      :alloid "20"
;;                      :picture "ok"
;;                      :filmography ""
;;                      :biography ""
;;                      :birth-date ""
;;                      :age ""
;;                      :nationality ""
;;                      :job ""
;;                      :name ""})
;; (scrapper-actor2/get-row-from-id "35365")
