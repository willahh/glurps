(ns glurps.admin.user.list
  (:require [glurps.admin.main :as main]
            [glurps.admin.user.setting :as setting]
            [glurps.process.crud.list :as crud-list]
            [glurps.process.crud.nav :as crud-nav]
            [glurps.process.crud.filter :as crud-filter]
            [glurps.model.user.user-dao :as user-dao]))

(defn get-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (crud-list/get-html-wrapper 
   session
   params
   setting/list-conf
   disable?
   (user-dao/count) user-dao/get-list user-dao/get-list-disable))
