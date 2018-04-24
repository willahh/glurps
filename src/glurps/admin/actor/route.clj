(ns glurps.admin.actor.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.index :as admin-list]
            [glurps.admin.actor.list :as admin-actor-list]
            [glurps.admin.actor.action :as admin-actor-action]
            [glurps.admin.actor.show :as admin-actor-show]
            [glurps.admin.actor.update :as admin-actor-update]))

(defroutes admin-actor-route
  ;; Actor list
  (GET "/admin/actor"
       [offset limit]
       (admin-actor-list/get-html))
  (POST "/admin/actor"
        {params :params}
        (admin-actor-list/get-html :filter-params params))
  (GET "/admin/actor/p:p"
       [p]
       (admin-actor-list/get-html :page (read-string p)))
  (POST "/admin/actor/p:p"
        {{p :p} :params :as filter-params}
        (admin-actor-list/get-html :filter-params (:params filter-params) :page (read-string p)))
  (GET "/admin/actor/trash"
       [offset limit]
       (admin-actor-list/get-html :disable? true))
  (GET "/admin/actor/list/update"
       [offset limit]
       (admin-actor-list/get-html :disable? true))
  (GET "/admin/actor/duplicate"
       []
       (admin-actor-action/duplicate))
  
  ;; Show
  (GET "/admin/actor/show/:id"
       [id]
       (admin-actor-show/get-html id))
  
  ;; Update / Insert
  (GET "/admin/actor/update/:id"
       [id]
       (admin-actor-update/get-html id))
  (POST "/admin/actor/update/:id"
        {params :params}
        (admin-actor-update/handle-update params))
  (GET "/admin/actor/insert"
       [id]
       (admin-actor-update/get-html-insert id))
  
  ;; Action
  (GET "/admin/actor/delete/:id" 
       [id]
       (admin-actor-action/delete id))
  (GET "/admin/actor/disable/:id" 
       [id]
       (admin-actor-action/disable id))
  (GET "/admin/actor/enable/:id" 
       [id]
       (admin-actor-action/enable id)))
