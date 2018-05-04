(ns glurps.admin.asset.list
  (:require [glurps.admin.asset.setting :as setting]
            [glurps.process.crud.list :as crud-list]            
            [glurps.model.asset.asset-dao :as asset-dao]))

(defn get-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (crud-list/get-html-wrapper session params setting/list-conf disable? (asset-dao/count) asset-dao/get-list asset-dao/get-list-disable))


(get-html {:params {}})
