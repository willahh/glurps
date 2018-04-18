(ns glurps.admin.actor.delete
  (:require [glurps.admin.main :as main]
            [glurps.admin.actor.list :as actor-list]
            [glurps.model.actor.actor-dao :as actor-dao]))

(defn handle-delete [actor-id]
  (actor-dao/delete actor-id)
  (actor-list/get-html))
