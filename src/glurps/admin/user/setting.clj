(ns glurps.admin.user.setting
  (:require [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(def list-conf
  {:path "/admin/user"
   :title "User list"
   :columns ["id"
             "login"
             "email"
             "first_name"
             "last_name"
             "date_create"
             "date_update"] 
   :filter-fields [{:key "asc" :name "Sort by"}
                   {:key "order-by" :name "Order by"}]
   :field-html-display {:picture field-image/get-html}})

(def field-id "id")

(def default-params {:columns ["id" "login" "email" "date_create" "date_update"]
                     :order-by "id"
                     :asc "1"
                     :page "1"
                     :limit "25"})