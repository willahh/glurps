(ns glurps.admin.search.route
  (:require [compojure.core :refer [defroutes ANY GET POST]]
            [glurps.admin.search.setting :as search-setting]
            [glurps.admin.search.html :as html]))

(defroutes admin-search-route
  (GET "/admin/search"
       {params :params session :session}
       (html/list-html session params)))
