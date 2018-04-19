(ns glurps.admin.actor.action
  (:require [ring.util.response :as response]
            [glurps.model.actor.actor-dao :as actor-dao]))

(defn delete [id]
  (actor-dao/delete id)
  (response/redirect "../../actor"))

(defn enable [id]
  (Thread/sleep 2000)
  (actor-dao/enable id)
  (response/redirect "../../actor"))

(defn disable [id]
  (actor-dao/disable id)
  (response/redirect "../../actor/trash"))
