(ns glurps.admin.asset.show
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.admin.asset.setting :as setting]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.show :as crud-show]
            [glurps.model.asset.asset-dao :as asset-dao]))



(defn get-html [id]
  (let [record (asset-dao/find-by-id id)
        columns (into [] (map #(:name %) (:fields setting/list-conf)))]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-show
     (crud-show/get-html columns
                         record
                         (:fields setting/list-conf))
     [record])))


(get-html 1)