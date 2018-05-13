(ns glurps.admin.user.setting
  (:require [glurps.process.db.properties :as properties]))

(def list-conf
  {:path "/admin/user"
   :module-name "user"
   :db-class "User"
   :field-id "_rid"
   :field-label "name"
   :field-image ""
   :search-field-title :name
   :search-field-descr :descr
   :search-field-image :image
   :option-thumb false
   :option-columns true
   :fields [{:name "_rid" :properties properties/string :type "integer" :list true :show true :insert false :update false :filter true}
            {:name "CreateDate" :properties properties/datetime :type "string" :filter true :insert false :update false}
            {:name "UpdateDate" :properties properties/datetime :type "string" :filter true :insert false :update false}
            
            
            {:name "name" :properties properties/string :type "string" :filter false}
            {:name "last_name" :properties properties/string :type "string" :filter false}
            {:name "login" :properties properties/string :type "string" :filter false}
            {:name "password" :properties properties/string :type "string" :filter false}]
   :default-params {:columns ["_rid" "name" "last_name" "login" "CreateDate" "UpdateDate"]
                    :order "id"
                    :asc "1"
                    :enable true
                    :page "1"
                    :limit "25"}
   :row-action [{:name "show" :url "/admin/user/show/{{id}}" :label "show" :title "Info" :icon "info"}
                {:name "edit" :url "/admin/user/show/{{id}}" :label "show" :title "Info" :icon "info"}]})
