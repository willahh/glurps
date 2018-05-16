(ns glurps.client.module.asset.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            ))

(defroutes client-asset-route
  (GET "/asset"
       []
       "a"))
