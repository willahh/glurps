(ns glurps.admin.actor.show
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.admin.actor.setting :as setting]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.show :as crud-show]
            [glurps.model.actor.actor-dao :as actor-dao]))

(defn get-html [id]
  (let [record (actor-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     {}
     {}
     (crud-show/get-html (:fields setting/list-conf) record))))
