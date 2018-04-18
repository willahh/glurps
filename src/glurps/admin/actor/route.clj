(ns glurps.admin.actor.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.index :as admin-list]
            [glurps.admin.actor.list :as admin-actor-list]
            [glurps.admin.actor.show :as admin-actor-show]
            [glurps.admin.actor.update :as admin-actor-update]
            [glurps.admin.actor.delete :as admin-actor-delete]
            [glurps.admin.actor.trash :as admin-actor-trash]))

(defroutes admin-actor-route
  (GET "/admin/actor"
       []
       (admin-actor-list/get-html))
  (GET "/admin/actor/show/:id"
       [id]
       (admin-actor-show/get-html id))
  (GET "/admin/actor/update/:id"
       [id]
       (admin-actor-update/get-html id))
  (POST "/admin/actor/update/:id"
        {params :params}
        (admin-actor-update/handle-update params))
  (GET "/admin/actor/insert"
       [id]
       (admin-actor-update/get-html-insert id))
  (GET "/admin/actor/delete/:id" 
       [id]
       (admin-actor-delete/handle-delete id))
  (GET "/admin/actor/trash" 
       []
       (admin-actor-trash/get-html)))
