(ns glurps.admin.user.html
  (:require [glurps.admin.user.setting :as setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.process.crud.update :as crud-update]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.user.user-dao :as user-dao]))

(defn list-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (main/admin-page-html-wrapper
   setting/list-conf
   main/module-type-show
   (crud-list/get-html-wrapper session params
                               setting/list-conf
                               disable?
                               (user-dao/count3)
                               user-dao/get-list
                               user-dao/get-list-disable)))

(defn show-html [id]
  (let [record (user-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-show
     (crud-show/get-html (:fields setting/list-conf) record)
     [record])))

(defn update-html [id]
  (let [record (user-dao/find-by-id id)]
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
