(ns glurps.client.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [glurps.client.views.home :as home]
            [glurps.client.views.sheet :as sheet]))

(defroutes app-routes
  (GET "/"
       []
       (home/get-html))
  (GET "/week"
       []
       (home/get-week-html))
  (GET "/sheet/:id"
       [id]
       (sheet/get-html id)))

(def app app-routes)
