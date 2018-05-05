(ns glurps.admin.user.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.user.html :as html]
            [glurps.admin.user.action :as action]))

(defroutes admin-user-route
  ;; List / show / update / insert
  (GET "/admin/user"
       request
       (html/list-html request))
  (POST "/admin/user"
        request
        (html/list-html request)) 
  (GET "/admin/user/trash"
       request
       (html/list-html request :disable? true)) 
  (POST "/admin/user/trash"
        request
        (html/list-html request :disable? true)) 
  (GET "/admin/user/show/:id" 
       [id]
       (html/show-html id))
  (GET "/admin/user/update/:id"
       [id]
       (html/update-html id))
  (POST "/admin/user/update/:id"
        {params :params}
        (action/update params))
  (GET "/admin/user/insert"
       [id]
       (html/insert-html id))
  (POST "/admin/user/insert"
        {params :params}
        (action/insert params))
  
  ;; Actions
  (GET "/admin/user/fav/:id"
       [id]
       (action/fav id))
  (GET "/admin/user/unfav/:id"
       [id]
       (action/unfav id))
  (GET "/admin/user/duplicate"
       []
       (action/duplicate))
  (GET "/admin/user/delete/:id" 
       [id]
       (action/delete id))
  (GET "/admin/user/disable/:id" 
       [id]
       (action/disable id))
  (GET "/admin/user/enable/:id" 
       [id]
       (action/enable id)))
