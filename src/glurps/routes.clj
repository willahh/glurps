(ns glurps.routes
  (:use compojure.core)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.core :as compojure]
            [compojure.handler :as handler]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [glurps.admin.index :as admin-list]
            [glurps.api.api :refer [api-route api-route-json]]
            [glurps.admin.actor.route :refer [admin-actor-route]]
            [glurps.admin.user.route :refer [admin-user-route]]
            [glurps.admin.group.route :refer [admin-group-route]]
            [glurps.admin.country.route :refer [admin-country-route]]
            [glurps.admin.asset.route :refer [admin-asset-route]]
            [glurps.admin.search.route :refer [admin-search-route]]
            [glurps.admin.login.route :refer [admin-login-route]]
            [glurps.client.module.asset.route :refer [client-asset-route]]
            [glurps.client.views.home :as home]
            [glurps.client.views.sheet :as sheet]
            [glurps.client.views.week :as week]
            [glurps.client.views.logs :as logs]
            [glurps.client.views.actor :as actor]))

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
       [params session]
       (admin-list/get-html params session)))

;; (defn init []
;;   (println "Application is starting"))

;; (def app
(defonce app
  (-> 
   (routes
    ;; app-routes
    #'app-routes
    api-route
    (wrap-json-response api-route-json)
    admin-actor-route
    admin-user-route
    admin-group-route
    admin-country-route
    admin-asset-route
    admin-search-route
    admin-login-route
    client-asset-route)
   (wrap-defaults
    (-> site-defaults
        (assoc-in [:security :anti-forgery] false)))))
