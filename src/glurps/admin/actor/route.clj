(ns glurps.admin.actor.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.index :as admin-list]
            [glurps.admin.actor.list :as admin-actor-list]
            [glurps.admin.actor.action :as admin-actor-action]
            [glurps.admin.actor.show :as admin-actor-show]
            [glurps.admin.actor.update :as admin-actor-update]))

(defroutes admin-actor-route
  ;; List
  (GET "/admin/actor"
       request (admin-actor-list/get-html request))
  (POST "/admin/actor"
        request (admin-actor-list/get-html request)) 
  (GET "/admin/actor/trash"
       request (admin-actor-list/get-html request :disable? true)) 
  (POST "/admin/actor/trash"
        request (admin-actor-list/get-html request :disable? true)) 
  
  ;; Show
  (GET "/admin/actor/show/:id" [id] (admin-actor-show/get-html id))
  
  ;; Update / Insert
  (GET "/admin/actor/update/:id"
       [id]
       (admin-actor-update/get-html id))
  (GET "/admin/actor/insert"
       [id]
       (admin-actor-update/get-html-insert id))
  (POST "/admin/actor/update/:id"
        {params :params}
        (admin-actor-update/handle-update params))
  
  ;; Action
  (GET "/admin/actor/fav/:id"
       [id]
       (admin-actor-action/fav id))
  (GET "/admin/actor/unfav/:id"
       [id]
       (admin-actor-action/unfav id))
  (GET "/admin/actor/duplicate"
       []
       (admin-actor-action/duplicate))
  (GET "/admin/actor/delete/:id" 
       [id]
       (admin-actor-action/delete id))
  (GET "/admin/actor/disable/:id" 
       [id]
       (admin-actor-action/disable id))
  (GET "/admin/actor/enable/:id" 
       [id]
       (admin-actor-action/enable id)))
