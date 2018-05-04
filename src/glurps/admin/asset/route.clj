(ns glurps.admin.asset.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.index :as admin-list]
            [glurps.admin.asset.list :as admin-asset-list]
            [glurps.admin.asset.action :as admin-asset-action]
            [glurps.admin.asset.show :as admin-asset-show]
            [glurps.admin.asset.update :as admin-asset-update]))

(defroutes admin-asset-route
  (GET "/admin/asset"       request (admin-asset-list/get-html request))
  (POST "/admin/asset"      request (admin-asset-list/get-html request)) 
  (GET "/admin/asset/trash" request (admin-asset-list/get-html request :disable? true)) 
  (POST "/admin/asset/trash" request (admin-asset-list/get-html request :disable? true)) 
  
  ;; Show
  (GET "/admin/asset/show/:id" [id] (admin-asset-show/get-html id))
  
  ;; Update / Insert
  (GET "/admin/asset/update/:id"
       [id]
       (admin-asset-update/get-html id))
  (POST "/admin/asset/update/:id"
        {params :params}
        (admin-asset-update/handle-update params))
  (GET "/admin/asset/insert"
       [id]
       (admin-asset-update/get-html-insert id))
  (POST "/admin/asset/insert"
        {params :params}
        (admin-asset-update/handle-insert params))
  
  ;; Action
  (GET "/admin/asset/fav/:id"
       [id]
       (admin-asset-action/fav id))
  (GET "/admin/asset/unfav/:id"
       [id]
       (admin-asset-action/unfav id))
  (GET "/admin/asset/duplicate"
       []
       (admin-asset-action/duplicate))
  (GET "/admin/asset/delete/:id" 
       [id]
       (admin-asset-action/delete id))
  (GET "/admin/asset/disable/:id" 
       [id]
       (admin-asset-action/disable id))
  (GET "/admin/asset/enable/:id" 
       [id]
       (admin-asset-action/enable id)))
