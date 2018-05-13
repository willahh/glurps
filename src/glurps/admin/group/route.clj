(ns glurps.admin.group.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.group.setting :as group-setting]
            [glurps.process.crud.update :as crud-update-temp-debug]
            [glurps.admin.group.setting :as setting]
            [glurps.admin.group.html :as html]
            [glurps.admin.group.action :as action]))

(defn map-page-params [session params default-params]
  (into {} (map (fn [m]
                  (let [k (first m)
                        v (cond (some? (k params)) (k params)
                                (some? (k session)) (k session)
                                (some? (k default-params)) (k default-params))] 
                    {(keyword k) v})) default-params)))

(defn handle-route [session params body-defn]
  (let [default-params (:default-params group-setting/list-conf)
        state (map-page-params session params default-params)
        session (merge session state)]
    {:headers {"Content-Type" "text/html"}
     :body (body-defn session params state)
     :session session}))

(defroutes admin-group-route
  ;; List insert show update
  (GET "/admin/group"
       {session :session params :params}
       (let [params (conj params {:enable true})]
         (handle-route session params html/list-html)))
  (POST "/admin/group"
        {session :session params :params}
        (let [params (conj params {:enable true})]
          (handle-route session params html/list-html)))
  (GET "/admin/group/trash"
       {session :session params :params}
       (let [params (conj params {:enable false})]
         (handle-route session params html/list-html)))
  (POST "/admin/group/trash"
        {session :session params :params}
        (let [params (conj params {:enable false})]
          (handle-route session params html/list-html)))
  (GET "/admin/group/show/:id"
       {session :session params :params}
       (let [params params]
         (handle-route session params html/show-html)))
  (GET "/admin/group/insert"
       {session :session params :params}
       (let [params params]
         (handle-route session params html/insert-html)))
  (GET "/admin/group/update/:id"
       {session :session params :params}
       (let [params params]
         (handle-route session params html/update-html)))
  
  ;; Action
  (POST "/admin/group/insert"
        {session :session params :params}
        (let [default-params (:default-params group-setting/list-conf)
              state (map-page-params session params default-params)]
          (action/insert session params state html/insert-html)))
  (POST "/admin/group/update/:id"
        {session :session params :params}
        (let [default-params (:default-params group-setting/list-conf)
              state (map-page-params session params default-params)]
          (action/update! session params state html/update-html)))
  (GET "/admin/group/fav/:id"
       [id]
       (action/fav id))
  (GET "/admin/group/unfav/:id"
       [id]
       (action/unfav id))
  (GET "/admin/group/duplicate"
       []
       (action/duplicate))
  (GET "/admin/group/delete/:id" 
       [id]
       (action/delete id))
  (GET "/admin/group/disable/:id" 
       [id]
       (action/disable id))
  (GET "/admin/group/enable/:id" 
       [id]
       (action/enable id)))


;; (delete "34:6-37:5")
;; (action/delete "41:5")
