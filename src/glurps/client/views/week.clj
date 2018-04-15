(ns glurps.client.views.week
  (:require [glurps.client.views.main :as main]
            [glurps.model.actor :as model-actor]
            [glurps.module.actor.actor-view :as actor-view]))

(defn get-html []
  (main/get-html [:div.row
                  [:div
                   [:h2 "Week"]
                   (actor-view/get-list-html (model-actor/get-list 2 2))]]))