(ns glurps.admin.user.edit
  (:require [glurps.admin.user.setting :as setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.model.user.user-dao :as user-dao]))

(defn get-html [id]
  (main/get-html
   (let [user-record (user-dao/find-by-id id)]
     (crud-show/get-html (:columns setting/list-conf)
                         user-record
                         (:fields setting/list-conf)))))
