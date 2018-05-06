(ns glurps.process.scrapper-allocine.update-db
  (:require [glurps.model.movie.movie :as model-movie]
            [glurps.model.actor.actor-dao :as actor-dao]
            [glurps.model.movie.movie-actor :as model-movie-actor]
            [glurps.process.scrapper-allocine.movie :as scrapper-movie]))

(defn insert-movie [alloid]
  (let [movie-row-data (scrapper-movie/get-fields-from-id alloid)]
    
    
    ;; TODO EN commentaire pour le moment, passer par l api
    ;; (model-movie/insert {:actors "TODO"
    ;;                      :genre "TODO"
    ;;                      :date (movie-row-data :date)
    ;;                      :alloid (movie-row-data :id)
    ;;                      :notespectator ((movie-row-data :note) :spectator)
    ;;                      :title (movie-row-data :title)
    ;;                      :description (movie-row-data :description)
    ;;                      :director (movie-row-data :director)
    ;;                      :notepress ((movie-row-data :note) :presse)})
    
    
    
    ))

(defn insert-into-model-movie-from-movie-row-data [movie-row-data]
  "Take a movie-row-data retrieved from html and insert into movie_actor relation table"
  (when (some? movie-row-data)
    (let [actor-id-list (let [actors (actor-dao/find-actor-by-name-list (movie-row-data :actors))]
                          (map #(% :id) actors))
          movie-id (movie-row-data :id)]
      (for [actor-id actor-id-list]
        ""
        
        ;; TODO EN commentaire pour le moment, passer par l api        
        ;; (model-movie-actor/insert {:movie_id movie-id
        ;; :actor_id actor-id})
        
        
        ))))
