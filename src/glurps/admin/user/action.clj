(ns glurps.admin.user.action
  (:require [ring.util.response :as response]
            [glurps.model.user.user-dao :as user-dao]))

(defn delete [id]
  (user-dao/delete id)
  (response/redirect "../../user"))

(defn enable [id]
  (Thread/sleep 2000)
  (user-dao/enable id)
  (response/redirect "../../user"))

(defn disable [id]
  (user-dao/disable id)
  (response/redirect "../../user/trash"))

(defn duplicate [id]
  (response/redirect "../../user"))

(defn fav [id]
  (user-dao/fav id)
  (response/redirect "../../user"))

(defn unfav [id]
  (user-dao/unfav id)
  (response/redirect "../../user"))
