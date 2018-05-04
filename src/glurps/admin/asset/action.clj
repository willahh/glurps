(ns glurps.admin.asset.action
  (:require [ring.util.response :as response]
            [glurps.model.asset.asset-dao :as asset-dao]))

(defn delete [id]
  (asset-dao/delete id)
  (response/redirect "../../asset"))

(defn enable [id]
  (Thread/sleep 2000)
  (asset-dao/enable id)
  (response/redirect "../../asset"))

(defn disable [id]
  (asset-dao/disable id)
  (response/redirect "../../asset/trash"))

(defn duplicate [id]
  (response/redirect "../../asset"))

(defn fav [id]
  (asset-dao/fav id)
  (response/redirect "../../asset"))

(defn unfav [id]
  (asset-dao/unfav id)
  (response/redirect "../../asset"))
