(ns glurps.admin.asset.html
  (:require [glurps.admin.asset.setting :as setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.process.crud.update :as crud-update]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.asset.asset-dao :as asset-dao]))

(defn list-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (main/admin-page-html-wrapper
   {}
   {}
   (crud-list/get-html-wrapper session params {}
                               setting/list-conf
                               (asset-dao/count)
                               asset-dao/get-list
                               0)))

(defn show-html [id]
  (let [record (asset-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     {}
     {}
     (crud-show/get-html (:fields setting/list-conf) record))))

(defn update-html [id]
  (let [record (asset-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     {}
     {} (crud-update/get-html setting/list-conf
                              record
                              (:fields setting/list-conf)))))

(defn insert-html [id]
  (main/admin-page-html-wrapper
   {}
   {}
   (crud-update/get-html setting/list-conf
                         nil
                         (:fields setting/list-conf))))
