(ns glurps.client.module.asset.list
  (:require [glurps.client.main :as main]))

(defn html [{:keys [params session] :as query}]
  (main/wrapper-html
   [:div 
    "ok"]))
