(ns glurps.admin.index
  (:require [glurps.admin.main :as main]))

(defn get-html []
  (main/get-html [:div
                  [:div "admin index"]]))
