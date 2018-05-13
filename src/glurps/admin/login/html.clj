(ns glurps.admin.login.html  
  (:require [glurps.admin.main :as main]
            (setting/list-conf)
            [glurps.process.crud.list :as crud-list]))

(defn list-html [params session]
  (main/admin-page-html-login-wrapper 
   session params
   (let []
     [:div.row {:style "margin-top: 30px;"}
      [:h1 "Glurps"]
      [:form.ui.form {:action "/admin/login" :method "POST"}
       [:div.fields
        [:div.field.six.wide
         [:label "Login"]
         [:input {:name "login", :placeholder "Login", :type "text"}]]
        [:div.field.six.wide
         [:label "Password"]
         [:input {:name "password", :placeholder "Password", :type "password"}]]
        [:button.ui.button
         {:type "submit"} "Login"]]]])))
