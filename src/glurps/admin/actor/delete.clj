(ns glurps.admin.actor.delete
  (:require [glurps.admin.main :as main]
            [glurps.admin.actor.index :as actor-index]
            [glurps.model.actor-dao :as actor-dao]))

(defn handle-delete [actor-id]
  (actor-dao/delete actor-id)
  (actor-index/get-html))
