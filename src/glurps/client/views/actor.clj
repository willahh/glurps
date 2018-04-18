(ns glurps.client.views.actor
  (:require [glurps.config :as config]
            [glurps.client.views.main :as main]
            [glurps.client.module.actor.actor-view :as actor-view]
            [glurps.model.actor.actor-dao :as actor-dao]
            [ring.util.anti-forgery :refer [anti-forgery-field]]))

(defn get-html []
  (main/get-html [:div.row
                  [:div
                   [:h2 "Actors"]
                   (actor-view/get-list-html (actor-dao/get-list 1 100))]]))
