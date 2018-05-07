(ns glurps.admin.actor.list
  (:require [wlh.utils :as utils]
            [glurps.admin.main :as main]
            [glurps.admin.actor.setting :as setting]
            [glurps.process.crud.list :as crud-list]
            [glurps.process.crud.nav :as crud-nav]
            [glurps.process.crud.filter :as crud-filter]
            [glurps.model.actor.actor-dao :as actor-dao]))

(defn get-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (main/admin-page-html-wrapper
   setting/list-conf
   main/module-type-show
   (crud-list/get-html-wrapper session params setting/list-conf disable? (actor-dao/count) actor-dao/get-list actor-dao/get-list-disable)))
