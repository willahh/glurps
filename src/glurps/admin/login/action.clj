(ns glurps.admin.login.action
  (:require [ring.util.response :as response]
            [glurps.admin.group.setting :as setting]
            [glurps.admin.index :as index]
            [glurps.admin.main :as main]
            [glurps.admin.login.html :as html]))

(defn check-auth [params session]
  (let [login (:login params)
        password (:password params)
        user-id "#10"
        logged true
        session (assoc session 
                       :logged true
                       :user-id user-id)]
    (if logged 
      {:headers {"Content-Type" "text/html"}
       :body (main/admin-page-html-login-wrapper
              session 
              params
              (index/get-html params session))
       :session session}
      {:headers {"Content-Type" "text/html"}
       :body (main/admin-page-html-login-wrapper 
              session
              params
              (html/list-html params session))})))
