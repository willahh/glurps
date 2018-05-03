(ns glurps.client.module.asset.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.client.module.asset.list :as list]
            [glurps.client.module.asset.ajax.actor :as ajax-actor]))

(defroutes client-asset-route
  (GET "/asset"
       request (list/html request))
  (GET "/asset/ajax/actor"
       request (ajax-actor/get-actors request)))
