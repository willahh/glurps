(ns glurps.admin.group.action
  (:require [ring.util.response :as response]
            [glurps.admin.group.setting :as setting]
            [glurps.process.crud.update :as crud-update]
            [glurps.model.group.group-model :as group-model]
            [glurps.model.group.group-dao :as group-dao]))

(defn delete [id]
  (group-dao/delete id)
  (response/redirect "../../group"))

(defn insert [params]
  (crud-update/handle-insert
   setting/list-conf params "../../group" group-model/make group-dao/insert)
  (response/redirect "../../group"))

(crud-update/handle-insert setting/list-conf {:id "3" :name "test" :active "1"} "../../group" group-model/make group-dao/insert)

(defn update [params]
  (crud-update/handle-update
   setting/list-conf params "../../group" group-model/make group-dao/update!))

(defn enable [id]
  (group-dao/enable id)
  (response/redirect "../../group"))

(defn disable [id]
  (group-dao/disable id)
  (response/redirect "../../group"))

(defn duplicate [id]
  (response/redirect "../../group"))

(defn fav [id]
  (group-dao/fav id)
  (response/redirect "../../group"))

(defn unfav [id]
  (group-dao/unfav id)
  (response/redirect "../../group"))
