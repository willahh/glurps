(ns glurps.admin.group.html
  (:require [glurps.admin.group.setting :as setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.process.crud.update :as crud-update]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.group.group-dao :as group-dao]))

(defn list-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (crud-list/get-html-wrapper session params
                              setting/list-conf
                              disable?
                              (group-dao/count)
                              group-dao/get-list
                              group-dao/get-list-disable))

(defn show-html [id]
  (let [record (group-dao/find-by-id id)
        columns (into [] (map #(:name %) (:fields setting/list-conf)))]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-show
     (crud-show/get-html columns
                         record
                         (:fields setting/list-conf))
     [record])))

(defn update-html [id]
  (main/get-html
   (let [record (group-dao/find-by-id id)]
     (crud-show/get-html (:columns setting/list-conf)
                         record
                         (:fields setting/list-conf)))))

(defn update-html [id]
  (let [record (group-dao/find-by-id id)]
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
