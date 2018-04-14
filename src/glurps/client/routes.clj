(ns glurps.client.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [glurps.client.views.home :as home]
            [glurps.client.views.sheet :as sheet]
            [glurps.client.views.week :as week]
            [glurps.client.views.logs :as logs]))

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
  (GET "/logs"
       []
       (logs/get-html)))

(def app app-routes)
