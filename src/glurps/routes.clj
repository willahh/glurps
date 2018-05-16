(ns glurps.routes
  (:use compojure.core)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.core :as compojure]
            [compojure.handler :as handler]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [glurps.admin.module.home.index :as admin-list]
            [glurps.api.api :refer [api-route api-route-json]]
            [glurps.admin.module.group.route :refer [admin-group-route]]
            [glurps.admin.module.search.route :refer [admin-search-route]]
            [glurps.admin.module.login.route :refer [admin-login-route]]
            [glurps.client.module.home.home :as home]
            [glurps.client.views.sheet :as sheet]
            [glurps.client.views.logs :as logs]))

(use 'ring.middleware.resource
     'ring.middleware.defaults
     'ring.util.response
     'ring.middleware.session.cookie
     'ring.middleware.session
     'ring.middleware.flash
     'ring.middleware.content-type
     'ring.middleware.not-modified
     'ring.middleware.params
     'ring.middleware.keyword-params)

(defroutes app-routes
  (route/resources "/")
  (GET "/"
       []
       (home/html))
  (GET "/week"
       []
       "week")
  (GET "/sheet/:id"
       [id]
       (sheet/get-html id))
  (GET "/actor"
       []
       "actor")
  
  (GET "/logs"
       []
       (logs/get-html))
  (GET "/admin"
       [params session]
       (admin-list/get-html params session)))

(defonce app
  (-> 
   (routes
    #'app-routes
    api-route
    (wrap-json-response api-route-json)
    admin-group-route
    admin-search-route
    admin-login-route)
   (wrap-defaults
    (-> site-defaults
        (assoc-in [:security :anti-forgery] false)))))
