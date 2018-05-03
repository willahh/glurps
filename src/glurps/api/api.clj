(ns glurps.api.api
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.model.actor.actor-dao :as actor-dao]
            [glurps.model.user.user-dao :as user-dao]))

(defn get-actors [params]
  (let [offset (if (:page params)
                 (- (Integer. (:page params)) 1)
                 1)
        limit (if (:limit params)
                (:limit params)
                10)]
    (str (into [] (actor-dao/get-list {} offset limit)))))

(defn get-users [params]
  (let [offset (if (:page params)
                 (- (Integer. (:page params)) 1)
                 1)
        limit (if (:limit params)
                (:limit params)
                10)]
    (str (into [] (user-dao/get-list {} offset limit)))))

(defroutes api-route
  (GET "/api"
       {:keys [params session]}
       (case (:col params)
         "actor" (get-actors params)
         "user" (get-users params)
         "")))
