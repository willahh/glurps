(ns glurps.client.views.week
  (:require [glurps.client.views.main :as main]))








(defn get-html []
  (main/get-html [:div.row
                  [:div "week"]]))