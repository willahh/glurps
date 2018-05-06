(ns glurps.admin.asset.html
  (:require [glurps.admin.asset.setting :as setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.process.crud.update :as crud-update]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.asset.asset-dao :as asset-dao]))

(defn list-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (crud-list/get-html-wrapper session params
                              setting/list-conf
                              disable?
                              (asset-dao/count)
                              asset-dao/get-list
                              asset-dao/get-list-disable))

(defn show-html [id]
  (let [record (asset-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-show
     (crud-show/get-html (:fields setting/list-conf)
                         record
                         (:fields setting/list-conf))
     [record])))

(defn update-html [id]
  (main/get-html
   (let [record (asset-dao/find-by-id id)]
     (crud-show/get-html (:columns setting/list-conf)
                         record
                         (:fields setting/list-conf)))))

(defn update-html [id]
  (let [record (asset-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-edit
     (crud-update/get-html record
                           (:fields setting/list-conf))
     [record])))

(defn insert-html [id]
  (main/admin-page-html-wrapper
   setting/list-conf
   main/module-type-edit
   (crud-update/get-html nil
                         (:fields setting/list-conf))))
