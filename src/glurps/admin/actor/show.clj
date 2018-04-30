(ns glurps.admin.actor.show
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.admin.actor.setting :as setting]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.show :as crud-show]
            [glurps.model.actor.actor-dao :as actor-dao]))

(defn get-html [id]
  (main/get-html
   (let [actor-record (actor-dao/find-by-id id)]
     (crud-show/get-html (:columns setting/list-conf)
                         actor-record
                         setting/list-conf))))
