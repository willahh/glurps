(ns glurps.admin.user.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.index :as admin-list]
            [glurps.admin.user.list :as admin-user-list]
            [glurps.admin.user.action :as admin-user-action]
            [glurps.admin.user.show :as admin-user-show]
            [glurps.admin.user.update :as admin-user-update]))

(defroutes admin-user-route
  (GET "/admin/user"       request (admin-user-list/get-html request))
  (POST "/admin/user"      request (admin-user-list/get-html request)) 
  (GET "/admin/user/trash" request (admin-user-list/get-html request :disable? true)) 
  (POST "/admin/user/trash" request (admin-user-list/get-html request :disable? true)) 
  
  ;; Show
  (GET "/admin/user/show/:id" [id] (admin-user-show/get-html id))
  
  ;; Update / Insert
  (GET "/admin/user/update/:id"
       [id]
       (admin-user-update/get-html id))
  (POST "/admin/user/update/:id"
        {params :params}
        (admin-user-update/handle-update params))
  (GET "/admin/user/insert"
       [id]
       (admin-user-update/get-html-insert id))
  
  ;; Action
  (GET "/admin/user/fav/:id"
       [id]
       (admin-user-action/fav id))
  (GET "/admin/user/unfav/:id"
       [id]
       (admin-user-action/unfav id))
  (GET "/admin/user/duplicate"
       []
       (admin-user-action/duplicate))
  (GET "/admin/user/delete/:id" 
       [id]
       (admin-user-action/delete id))
  (GET "/admin/user/disable/:id" 
       [id]
       (admin-user-action/disable id))
  (GET "/admin/user/enable/:id" 
       [id]
       (admin-user-action/enable id)))
