(ns glurps.admin.asset.setting
  (:require [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(def list-conf
  {:path "/admin/asset"
   :module-name "asset"
   :field-id "id"
   :field-label "title"
   :field-image ""
   :fields [{:name "id" :type "integer"}
            {:name "type" :type "string" :validator string?}
            {:name "file_name" :type "string" :validator string?}
            {:name "size" :type "integer" :validator integer?}
            {:name "width" :type "integer" :validator integer?}
            {:name "height" :type "integer" :validator integer?}
            {:name "title" :type "string" :validator string?}
            {:name "description" :type "string" :validator string?}
            {:name "date_create" :type "string"}
            {:name "date_update" :type "string"}]
   :filter-fields ["id" "type"]
   :default-params {:columns ["id" 
                              "type"
                              "file_name"
                              "size"
                              "width"
                              "height"
                              "title"
                              "description"
                              "date_create"
                              "date_update"]
                    :order "id"
                    :asc "1"
                    :page "1"
                    :limit "25"}})
