(ns glurps.admin.module.group.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.module.group.setting :as group-setting]
            [glurps.admin.module.group.helper :as group-helper]
            [glurps.admin.module.group.setting :as setting]
            [glurps.admin.module.group.html :as html]
            [glurps.admin.module.group.action :as action]))

(defroutes admin-group-route
  (GET "/admin/group"
       {session :session params :params}
       (let [params (conj params {:enable true})]
         (group-helper/handle-route session params html/list-html)))
  (POST "/admin/group"
        {session :session params :params}
        (let [params (conj params {:enable true})]
          (group-helper/handle-route session params html/list-html)))
  (GET "/admin/group/trash"
       {session :session params :params}
       (let [params (conj params {:enable false})]
         (group-helper/handle-route session params html/list-html)))
  (POST "/admin/group/trash"
        {session :session params :params}
        (let [params (conj params {:enable false})]
          (group-helper/handle-route session params html/list-html)))
  (GET "/admin/group/show/:id"
       {session :session params :params}
       (let [params params]
         (group-helper/handle-route session params html/show-html)))
  (GET "/admin/group/insert"
       {session :session params :params}
       (let [params params]
         (group-helper/handle-route session params html/insert-html)))
  (GET "/admin/group/update/:id"
       {session :session params :params}
       (let [params params]
         (group-helper/handle-route session params html/update-html)))
  (POST "/admin/group/insert"
        {session :session params :params}
        (let [default-params (:default-params group-setting/list-conf)
              state (group-helper/map-page-params session params default-params)]
          (action/insert session params state html/insert-html)))
  (POST "/admin/group/update/:id"
        {session :session params :params}
        (let [default-params (:default-params group-setting/list-conf)
              state (group-helper/map-page-params session params default-params)]
          (action/update! session params state html/update-html)))
  (GET "/admin/group/fav/:id"
       [id]
       (action/action-batch id {:fav true} "../../group"))
  (GET "/admin/group/unfav/:id"
       [id]
       (action/action-batch id {:fav false} "../../group"))
  (GET "/admin/group/duplicate"
       [])
  (GET "/admin/group/delete/:id" 
       [id]
       (action/delete id))
  (GET "/admin/group/disable/:id" 
       [id]
       (action/action-batch id {:enable false} "../../group"))
  (GET "/admin/group/enable/:id" 
       [id]
       (action/action-batch id {:enable true} "../../group/trash")))

;; (group-helper/handle-route {} {:id 1} html/show-html)
;; (group-helper/handle-route {} {:id 1} html/insert-html)
;; (action/insert {} {:id 1 :count 1} {} html/insert-html)