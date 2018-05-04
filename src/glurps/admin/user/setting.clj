(ns glurps.admin.user.setting
  (:require [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(def list-conf
  {:path "/admin/user"
   :module_name "user"
   :field-id "id"
   :field-label "email"
   :field-image ""
   :fields [{:name "id" :type "integer"}
            {:name "login" :type "string"}
            {:name "email" :type "string"}
            {:name "first_name" :type "string"}
            {:name "last_name" :type "string"}
            {:name "date_create" :type "string"}
            {:name "date_update" :type "string"}] 
   :filter-fields ["id" "login"]
   :default-params {:columns ["id" "login" "email" "date_create" "date_update"]
                    :order "id"
                    :asc "1"
                    :page "1"
                    :limit "25"}})
