(ns glurps.client.module.asset.ajax.actor
  (:require [glurps.model.actor.actor-dao :as actor-dao]))

(defn get-actors [{:keys [params session] :as request}]
  (let [page (if (:page params)
               (:page params)
               1)
        limit (if (:limit params)
                (:limit params)
                10)]
    (str (into [] (actor-dao/get-list {} page limit)))))