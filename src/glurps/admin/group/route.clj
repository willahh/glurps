(ns glurps.admin.group.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.group.html :as html]
            [glurps.admin.group.action :as action]))

(defroutes admin-group-route
  ;; List / show / update / insert
  (GET "/admin/group"
       request
       (html/list-html request))
  (POST "/admin/group"
        request
        (html/list-html request)) 
  (GET "/admin/group/trash"
       request
       (html/list-html request :disable? true)) 
  (POST "/admin/group/trash"
        request
        (html/list-html request :disable? true)) 
  (GET "/admin/group/show/:id" 
       [id]
       (html/show-html id))
  (GET "/admin/group/update/:id"
       [id]
       (html/update-html id))
  (POST "/admin/group/update/:id"
        {params :params}
        (action/update params))
  (GET "/admin/group/insert"
       [id]
       (html/insert-html id))
  (POST "/admin/group/insert"
        {params :params}
        (action/insert params))
  
  ;; Actions
  (GET "/admin/group/fav/:id"
       [id]
       (action/fav id))
  (GET "/admin/group/unfav/:id"
       [id]
       (action/unfav id))
  (GET "/admin/group/duplicate"
       []
       (action/duplicate))
  (GET "/admin/group/delete/:id" 
       [id]
       (action/delete id))
  (GET "/admin/group/disable/:id" 
       [id]
       (action/disable id))
  (GET "/admin/group/enable/:id" 
       [id]
       (action/enable id)))
