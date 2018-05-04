(ns glurps.api.api
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.model.actor.actor-dao :as actor-dao]
            [glurps.model.user.user-dao :as user-dao]))

;; TODO voir le poste http://blog.ippon.fr/2017/10/25/temp-slug-957/ pour une
;; intégration détaillée d'une api rest.
;; TODO, il faudra intégrer des routes avec les actions GET POST PUT DELETE etc

(defn get-actors [params]
  (let [offset (if (:page params)
                 (- (Integer. (:page params)) 1)
                 1)
        limit (if (:limit params)
                (:limit params)
                10)]
    (str (into [] (actor-dao/get-list params offset limit)))))

(defn get-users [params]
  (let [offset (if (:page params)
                 (- (Integer. (:page params)) 1)
                 1)
        limit (if (:limit params)
                (:limit params)
                10)]
    (str (into [] (user-dao/get-list params offset limit)))))

(def context ["actor" "user"])

(defroutes api-route
  (GET "/api"
       {:keys [params session]}
       (let [ctx (:ctx params)]
         (if ctx
           (case (:ctx params)
             "actor" (get-actors params)
             "user" (get-users params)
             (str "Invalid context, availables context: " context))
           "No context, you should provide a ctx parameter"))))
