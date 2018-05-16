(ns glurps.admin.module.login.route
  (:require [ring.util.response :as response]
            [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.main :as main]
            [glurps.admin.module.login.setting :as login-setting]
            [glurps.admin.module.login.action :as action]
            [glurps.admin.module.login.html :as html]))

(defroutes admin-login-route
  (GET "/admin/login"
       {params :params session :session}
       (html/list-html params session))
  (POST "/admin/login"
        {params :params session :session}
        (action/check-auth params session))
  (GET "/admin/logout"
       {params :params session :session}
       (let [session (assoc session :logged false :login nil :password nil :user-id nil)]
         {:headers {"Content-Type" "text/html"}
          :body (main/admin-page-html-login-wrapper 
                 session
                 params
                 (html/list-html params session))
          :session session})))
