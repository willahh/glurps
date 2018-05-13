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
   session
   params
   (crud-list/get-html-wrapper
    session
    params
    {}
    setting/list-conf
    (actor-dao/count)
    actor-dao/get-list
    0)))
