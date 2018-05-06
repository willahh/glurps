(ns glurps.admin.user.html
  (:require [glurps.admin.user.setting :as setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.process.crud.update :as crud-update]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.user.user-dao :as user-dao]))

(defn list-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (crud-list/get-html-wrapper session params
                              setting/list-conf
                              disable?
                              (user-dao/count3)
                              user-dao/get-list
                              user-dao/get-list-disable))

(list-html {:params {:fav 1}})
(user-dao/get-list (merge {:active 1} {}) 0 100)

(defn show-html [id]
  (let [record (user-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-show
     (crud-show/get-html (:fields setting/list-conf)
                         record
                         (:fields setting/list-conf))
     [record])))

(defn update-html [id]
  (main/get-html
   (let [record (user-dao/find-by-id id)]
     (crud-show/get-html (:columns setting/list-conf)
                         record
                         (:fields setting/list-conf)))))

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
