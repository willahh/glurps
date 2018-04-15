(ns glurps.client.routes
  (:use compojure.core)
  (:require [compojure.core :refer :all]
            [compojure.middleware :as middleware]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults site-defaults]]
            [glurps.client.views.home :as home]
            [glurps.client.views.sheet :as sheet]
            [glurps.client.views.week :as week]
            [glurps.client.views.logs :as logs]
            [glurps.client.views.actor :as actor]))

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
       (logs/get-html)))
;; (def app app-routes)

(def app
  (wrap-defaults app-routes site-defaults))

(defn init []
  (println "Application is starting"))














;; (middleware/wrap-canonical-redirect)


;; (def app
;;   (-> (handler/api app-routes)
;;       (middleware/wrap-json-body)
;;       (middleware/wrap-json-response)))


;; (def app
;;   (-> (handler/api app-routes)
;;       (middleware/wrap-canonical-redirect)))









;; (ring.middleware.defaults/api-defaults )

;; (def app (api-defaults app-routes))

;; (def app (wrap-defaults api-defaults app-routes))

;; (def app
;;   (-> (handler/site app-routes)
;;       (wrap-defaults)
;;       (api-defaults)))




;; (defn with-header [handler header value]
;;   (fn [request]
;;     (let [response (handler request)]
;;       (assoc-in response [:headers header] value))))

;; (def app
;;   (-> app-routes
;;       (with-header "X-Lang" "Clojure")
;;       (with-header "X-Framework" "Compojure")))



;; (def app
;;   (-> app-routes
;;       (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))))


;; (def app (wrap-routes app-routes))

;; (def app
;;   (-> (handler/site app-routes)
;;       (wrap-json-body)
;;       (wrap-json-response)))















;; (defn wrap-version [handler]
;;   (fn [request]
;;     (handler (assoc request :app-version "1.0.1"))))

;; (def app (wrap-version app-routes))



;; (def app
;;   (-> app-routes
;;       wrap-json-params))
