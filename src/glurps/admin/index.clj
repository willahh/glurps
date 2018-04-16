(ns glurps.admin.index
  (:require [glurps.admin.main :as main]
            [glurps.model.actor :as model-actor]))

(defn get-html []
  (main/get-html [:div
                  [:div "admin index"]]))
