(ns glurps.admin.asset.edit
  (:require [glurps.admin.asset.setting :as setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.model.asset.asset-dao :as asset-dao]))

(defn get-html [id]
  (main/get-html
   (let [asset-record (asset-dao/find-by-id id)]
     (crud-show/get-html (:columns setting/list-conf)
                         asset-record
                         (:fields setting/list-conf)))))
