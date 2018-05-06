(ns glurps.admin.asset.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.asset.html :as html]
            [glurps.admin.asset.action :as action]))

(defroutes admin-asset-route
  ;; List / show / update / insert
  (GET "/admin/asset"
       request
       (html/list-html request))
  (POST "/admin/asset"
        request
        (html/list-html request)) 
  (GET "/admin/asset/trash"
       request
       (html/list-html request :disable? true)) 
  (POST "/admin/asset/trash"
        request
        (html/list-html request :disable? true)) 
  (GET "/admin/asset/show/:id" 
       [id]
       (html/show-html id))
  (GET "/admin/asset/update/:id"
       [id]
       (html/update-html id))
  (POST "/admin/asset/update/:id"
        {params :params}
        (action/update params))
  (GET "/admin/asset/insert"
       [id]
       (html/insert-html id))
  (POST "/admin/asset/insert"
        {params :params}
        (action/insert params))
  
  ;; Actions
  (GET "/admin/asset/fav/:id"
       [id]
       (action/fav id))
  (GET "/admin/asset/unfav/:id"
       [id]
       (action/unfav id))
  (GET "/admin/asset/duplicate"
       []
       (action/duplicate))
  (GET "/admin/asset/delete/:id" 
       [id]
       (action/delete id))
  (GET "/admin/asset/disable/:id" 
       [id]
       (action/disable id))
  (GET "/admin/asset/enable/:id" 
       [id]
       (action/enable id)))
