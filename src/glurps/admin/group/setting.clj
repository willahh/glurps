(ns glurps.admin.group.setting
  (:require [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(def list-conf
  {:path "/admin/group"
   :module-name "group"
   :field-id "id"
   :field-label "name"
   :field-image ""
   :fields [{:name "id" :type "integer"}
            {:name "name" :type "string"}] 
   :filter-fields ["id" "name"]
   :default-params {:columns ["id" "name"]
                    :order "id"
                    :asc "1"
                    :page "1"
                    :limit "25"}})
