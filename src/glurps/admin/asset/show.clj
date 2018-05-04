(ns glurps.admin.asset.show
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.admin.asset.setting :as setting]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.show :as crud-show]
            [glurps.model.asset.asset-dao :as asset-dao]))

(defn get-html [id]
  (main/get-html
   (let [asset-record (asset-dao/find-by-id id)]
     (crud-show/get-html (:columns setting/list-conf)
                         asset-record
                         (:fields setting/list-conf)))))
