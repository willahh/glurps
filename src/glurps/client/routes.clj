(ns glurps.client.routes
  (:use compojure.core)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.core :as compojure]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [glurps.client.views.home :as home]
            [glurps.client.views.sheet :as sheet]
            [glurps.client.views.week :as week]
            [glurps.client.views.logs :as logs]
            [glurps.client.views.actor :as actor]))

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
       (admin-list/get-html)))

(defn init []
  (println "Application is starting"))

(def app
  (-> (routes app-routes admin-actor-route)
      (wrap-resource "public")
      (wrap-keyword-params)
      (wrap-params)
      (wrap-content-type)
      (wrap-not-modified)))
