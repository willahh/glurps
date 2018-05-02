(ns glurps.client.module.asset.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.client.module.asset.list :as list]))

(defroutes client-asset-route
  (GET "/admin/asset"
       request (list/html request)))
