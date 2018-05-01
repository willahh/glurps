(ns glurps.admin.actor.edit
  (:require [glurps.admin.actor.setting :as setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.model.actor.actor-dao :as actor-dao]))

(defn get-html [id]
  (let [record (actor-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-edit
     (crud-show/get-html (:columns setting/list-conf)
                         record
                         setting/list-conf)
     [record])))
