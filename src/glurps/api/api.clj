(ns glurps.api.api
  (:require [ring.util.response :refer [response]]
            [ring.middleware.json :refer [wrap-json-response]]
            [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.model.actor.actor-dao :as actor-dao]
            [glurps.model.user.user-dao :as user-dao]
            [glurps.model.search.search-dao :as search-dao]))

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

(defroutes api-route-json
  (GET "/api/search"
       [q] 
       (let [rows (map (fn [m]
                         {:id (:_rid m)
                          :name (:name m)
                          :description (:description m)
                          :class (:_class m)
                          :url (str "/admin/" (clojure.string/lower-case (:_class m))
                                    "/show/" (clojure.string/replace (:_rid m) "#" ""))})
                       (search-dao/get-list {:query q} 0 10000))] 
         (response {:total_count (count rows)
                    :items rows}))))
