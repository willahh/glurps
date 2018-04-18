(ns glurps.client.views.week
  (:require [glurps.client.views.main :as main]
            [glurps.model.actor.actor-dao :as actor-dao]
            [glurps.client.module.actor.actor-view :as actor-view]))

(defn get-html []
  (main/get-html [:div.row
                  [:div
                   [:h2 "Week"]
                   (actor-view/get-list-html (actor-dao/get-list 2 2))]]))
