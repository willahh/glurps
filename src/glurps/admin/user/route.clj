(ns glurps.admin.user.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.user.setting :as user-setting]
            [glurps.admin.user.helper :as user-helper]
            [glurps.admin.user.setting :as setting]
            [glurps.admin.user.html :as html]
            [glurps.admin.user.action :as action]))

(defroutes admin-user-route
  (GET "/admin/user"
       {session :session params :params}
       (let [params (conj params {:enable true})]
         (user-helper/handle-route session params html/list-html)))
  (POST "/admin/user"
        {session :session params :params}
        (let [params (conj params {:enable true})]
          (user-helper/handle-route session params html/list-html)))
  (GET "/admin/user/trash"
       {session :session params :params}
       (let [params (conj params {:enable false})]
         (user-helper/handle-route session params html/list-html)))
  (POST "/admin/user/trash"
        {session :session params :params}
        (let [params (conj params {:enable false})]
          (user-helper/handle-route session params html/list-html)))
  (GET "/admin/user/show/:id"
       {session :session params :params}
       (let [params params]
         (user-helper/handle-route session params html/show-html)))
  (GET "/admin/user/insert"
       {session :session params :params}
       (let [params params]
         (user-helper/handle-route session params html/insert-html)))
  (GET "/admin/user/update/:id"
       {session :session params :params}
       (let [params params]
         (user-helper/handle-route session params html/update-html)))
  (POST "/admin/user/insert"
        {session :session params :params}
        (let [default-params (:default-params user-setting/list-conf)
              state (user-helper/map-page-params session params default-params)]
          (action/insert session params state html/insert-html)))
  (POST "/admin/user/update/:id"
        {session :session params :params}
        (let [default-params (:default-params user-setting/list-conf)
              state (user-helper/map-page-params session params default-params)]
          (action/update! session params state html/update-html)))
  (GET "/admin/user/fav/:id"
       [id]
       (action/action-batch id {:fav true} "../../user"))
  (GET "/admin/user/unfav/:id"
       [id]
       (action/action-batch id {:fav false} "../../user"))
  (GET "/admin/user/duplicate"
       [])
  (GET "/admin/user/delete/:id" 
       [id]
       (action/delete id))
  (GET "/admin/user/disable/:id" 
       [id]
       (action/action-batch id {:enable false} "../../user"))
  (GET "/admin/user/enable/:id" 
       [id]
       (action/action-batch id {:enable true} "../../user/trash")))
