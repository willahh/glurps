(ns glurps.admin.group.html
  (:require [glurps.admin.group.setting :as setting]
            [glurps.admin.user.setting :as user-setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.process.crud.update :as crud-update]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.group.group-dao :as group-dao]
            [glurps.model.user.user-dao :as user-dao]))

(defn list-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (crud-list/get-html-wrapper session params
                              setting/list-conf
                              disable?
                              (group-dao/count)
                              group-dao/get-list
                              group-dao/get-list-disable))

(defn show-html [id]
  (let [record (group-dao/find-by-id id)
        records (:fields setting/list-conf)]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-show
     [:div
      [:div (crud-show/get-html records
                                record
                                (:fields setting/list-conf))]
      (let [records (user-dao/find-user-list-from-group-id {:active 1} (Integer. id) 0 10)]         
        [:div 
         [:h2 "Users"]
         (crud-list/get-html (:fields user-setting/list-conf)
                             records
                             "login"
                             1
                             setting/list-conf
                             "user"
                             (:list-action-html-fn setting/list-conf))])]
     [record])))

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