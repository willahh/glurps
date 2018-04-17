(ns glurps.client.routes
  (:use compojure.core)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [glurps.client.views.home :as home]
            [glurps.client.views.sheet :as sheet]
            [glurps.client.views.week :as week]
            [glurps.client.views.logs :as logs]
            [glurps.client.views.actor :as actor]
            [glurps.admin.index :as admin-list]
            [glurps.admin.actor.list :as admin-actor-list]
            [glurps.admin.actor.show :as admin-actor-show]
            [glurps.admin.actor.update :as admin-actor-update]
            [glurps.admin.actor.delete :as admin-actor-delete]))

(use 'ring.middleware.resource
     'ring.middleware.content-type
     'ring.middleware.not-modified
     'ring.middleware.params
     'ring.middleware.keyword-params)

(defroutes app-routes
  (GET "/"
       []
       (home/get-html))
  (GET "/week"
       []
       (week/get-html))
  (GET "/sheet/:id"
       [id]
       (sheet/get-html id))
  (GET "/actor"
       []
       (actor/get-html))
  (POST "/actor"
        [params] (prn-str params))
  (GET "/logs"
       []
       (logs/get-html))
  (GET "/admin"
       []
       (admin-list/get-html))
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
  (GET "/admin/actor/delete/:id" 
       [id]
       (admin-actor-delete/handle-delete id)))

(defn init []
  (println "Application is starting"))

(def app
  (-> app-routes
      (wrap-resource "public")
      (wrap-keyword-params)
      (wrap-params)
      (wrap-content-type)
      (wrap-not-modified)))
