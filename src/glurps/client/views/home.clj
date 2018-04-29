(ns glurps.client.views.home
  (:require [glurps.client.views.main :as main]
            [glurps.client.module.movie.movie-view :as movie-view]
            [glurps.model.actor.actor-dao :as actor-dao]
            [glurps.process.scrapper-allocine.home :as scrapper-home]
            [glurps.client.module.actor.actor-view :as actor-view]))

(defn- get-item-list-view [rows]
  [:div.row
   (map #(movie-view/get-item-html %) rows)])

(defn get-html []
  (main/get-html [:div
                  [:h2 "Movies"]
                  (get-item-list-view (scrapper-home/get-sorties-week-rows-debug))
                  [:h2 "Actors"]
                  (actor-view/get-list-html (actor-dao/get-list {} 2 2))]))
