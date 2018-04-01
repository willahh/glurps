(ns glurps.client.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [glurps.client.views.main]))

(defroutes app-routes
  (GET "/"
       []
       (glurps.client.views.main/get-root-html)))

(def app app-routes)
