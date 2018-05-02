(ns glurps.client.module.asset.ajax.actor
  (:require [glurps.model.actor.actor-dao :as actor-dao]))

(defn get-actors [{:keys [params session] :as request}]
  (str (into [] (actor-dao/get-list {} 0 2))))