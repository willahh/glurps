(ns glurps.client.routes
  (:use compojure.core)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [compojure.core :as compojure]
            [compojure.handler :as handler]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [glurps.admin.index :as admin-list]
            [glurps.admin.actor.route :refer [admin-actor-route]]
            [glurps.admin.user.route :refer [admin-user-route]]
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
       []
       (admin-list/get-html)))

(defn init []
  (println "Application is starting"))

;; (def app
;;   (-> 
;;    (routes app-routes admin-actor-route admin-user-route)
;;    (wrap-session)
;;    (wrap-defaults (merge site-defaults {:security {:anti-forgery false}}))))

;; (def app
;;   (-> 
;;    (routes app-routes admin-actor-route admin-user-route)
;;    (wrap-defaults
;;     (-> site-defaults
;;         (assoc-in [:security :anti-forgery] false)
;;         (dissoc :session)))
;;    (wrap-flash)
;;    (wrap-session)))

(def app
  (-> 
   (routes
    app-routes
    admin-actor-route
    admin-user-route
    client-asset-route)
   (wrap-defaults
    (-> site-defaults
        (assoc-in [:security :anti-forgery] false)
        (assoc-in [:session :store] (cookie-store {:key "BuD3KgdAXhDHrJXu"}))
        (assoc-in [:session :cookie-name] "example-app-sessions")))))

;; (def app
;;   (-> 
;;    (routes app-routes admin-actor-route admin-user-route)
;;    (handler/site)))
