(ns glurps.admin.country.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.country.setting :as country-setting]
            [glurps.admin.country.helper :as country-helper]
            [glurps.admin.country.setting :as setting]
            [glurps.admin.country.html :as html]
            [glurps.admin.country.action :as action]))

(defroutes admin-country-route
  (GET "/admin/country"
       {session :session params :params}
       (let [params (conj params {:enable true})]
         (country-helper/handle-route session params html/list-html)))
  (POST "/admin/country"
        {session :session params :params}
        (let [params (conj params {:enable true})]
          (country-helper/handle-route session params html/list-html)))
  (GET "/admin/country/trash"
       {session :session params :params}
       (let [params (conj params {:enable false})]
         (country-helper/handle-route session params html/list-html)))
  (POST "/admin/country/trash"
        {session :session params :params}
        (let [params (conj params {:enable false})]
          (country-helper/handle-route session params html/list-html)))
  (GET "/admin/country/show/:id"
       {session :session params :params}
       (let [params params]
         (country-helper/handle-route session params html/show-html)))
  (GET "/admin/country/insert"
       {session :session params :params}
       (let [params params]
         (country-helper/handle-route session params html/insert-html)))
  (GET "/admin/country/update/:id"
       {session :session params :params}
       (let [params params]
         (country-helper/handle-route session params html/update-html)))
  (POST "/admin/country/insert"
        {session :session params :params}
        (let [default-params (:default-params country-setting/list-conf)
              state (country-helper/map-page-params session params default-params)]
          (action/insert session params state html/insert-html)))
  (POST "/admin/country/update/:id"
        {session :session params :params}
        (let [default-params (:default-params country-setting/list-conf)
              state (country-helper/map-page-params session params default-params)]
          (action/update! session params state html/update-html)))
  (GET "/admin/country/fav/:id"
       [id]
       (action/action-batch id {:fav true} "../../country"))
  (GET "/admin/country/unfav/:id"
       [id]
       (action/action-batch id {:fav false} "../../country"))
  (GET "/admin/country/duplicate"
       [])
  (GET "/admin/country/delete/:id" 
       [id]
       (action/delete id))
  (GET "/admin/country/disable/:id" 
       [id]
       (action/action-batch id {:enable false} "../../country"))
  (GET "/admin/country/enable/:id" 
       [id]
       (action/action-batch id {:enable true} "../../country/trash")))
