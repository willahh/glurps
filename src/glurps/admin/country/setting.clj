(ns glurps.admin.country.setting
  (:require [glurps.process.db.properties :as properties]))

(def list-conf
  {:path "/admin/country"
   :module-name "country"
   :db-class "Country"
   :field-id "_rid"
   :field-label "name"
   :field-image ""
   :search-field-title :name
   :search-field-descr :descr
   :search-field-image :image
   :option-thumb false
   :option-columns true
   :fields [{:name "_rid" :properties properties/string :type "integer" :list true :show true :insert false :update false :filter true}
            {:name "name" :properties properties/string :type "string" :filter false}
            {:name "nicename" :properties properties/string :type "string" :filter false}
            {:name "numcode" :properties properties/string :type "integer" :filter false}
            {:name "phonecode" :properties properties/string :type "string" :filter false}
            {:name "CreateDate" :properties properties/datetime :type "string" :filter true :insert false :update false}
            {:name "UpdateDate" :properties properties/datetime :type "string" :filter true :insert false :update false}]
   :default-params {:columns ["_rid" "name" "nicename" "numcode" "phonecode" "CreateDate" "UpdateDate"]
                    :order "id"
                    :asc "1"
                    :enable true
                    :page "1"
                    :limit "25"}
   :row-action [{:name "show" :url "/admin/country/show/{{id}}" :label "show" :title "Info" :icon "info"}
                {:name "edit" :url "/admin/country/show/{{id}}" :label "show" :title "Info" :icon "info"}]})
