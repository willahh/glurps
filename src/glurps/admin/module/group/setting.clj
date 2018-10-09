(ns glurps.admin.module.group.setting
  (:require [clojure.string :as str]
            [glurps.process.db.properties :as properties]
            [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(def list-conf
  {:path "/admin/group"
   :module-name "group"
   :db-class "Group"
   :field-id "group_id"
   :field-label "name"
   :field-image ""
   :search-field-title :name
   :search-field-descr :descr
   :search-field-image :image
   :option-thumb false
   :option-columns true
   :table [{:name "group_id" :type "int" :null false :primary true :auto_increment true}
           {:name "name" :type "varchar(255)" :null false}
           {:name "hasUser" :type "boolean" :null false}
           {:name "create_date" :type "datetime" :null false}
           {:name "update_date" :type "datetime" :null false}]
   :fields [{:name "group_id" :properties properties/string :type "integer" :list true :show true :insert false :update false :filter true}
            {:name "name" :properties properties/string :type "string" :filter true}
            ;; {:name "hasUser" :properties properties/string :type "one-to-many" :filter true}
            {:name "hasUser" :properties properties/string :type "boolean" :filter true}
            {:name "create_date" :properties properties/datetime :type "string" :filter true :insert false :update false}
            {:name "update_date" :properties properties/datetime :type "string" :filter true :insert false :update false}]
   :default-params {:columns ["group_id" "name" "create_date" "update_date"]
                    :order "id"
                    :asc "1"
                    :enable true
                    :page "1"
                    :limit "25"}
   :row-action [{:name "show" :url "/admin/group/show/{{id}}" :label "show" :title "Info" :icon "info"}
                {:name "edit" :url "/admin/group/show/{{id}}" :label "show" :title "Info" :icon "info"}]})
