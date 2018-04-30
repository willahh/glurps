(ns glurps.admin.user.show
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.admin.user.setting :as setting]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.show :as crud-show]
            [glurps.model.user.user-dao :as user-dao]))

(defn get-html [id]
  (main/get-html
   (let [user-record (user-dao/find-by-id id)]
     (crud-show/get-html (:columns setting/list-conf)
                         user-record
                         setting/list-conf))))
