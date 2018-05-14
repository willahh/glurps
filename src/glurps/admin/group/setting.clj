(ns glurps.admin.group.setting
  (:require [clojure.string :as str]
            [glurps.process.db.properties :as properties]
            [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(def list-conf
  {:path "/admin/group"
   :module-name "group"
   :db-class "Group"
   :field-id "_rid"
   :field-label "name"
   :field-image ""
   :search-field-title :name
   :search-field-descr :descr
   :search-field-image :image
   :option-thumb false
   :option-columns true
   :fields [{:name "_rid" :properties properties/string :type "integer" :list true :show true :insert false :update false :filter true}
            {:name "name" :properties properties/string :type "string" :filter true}
            {:name "hasUser" :properties properties/string :type "one-to-many" :filter true}
            {:name "CreateDate" :properties properties/datetime :type "string" :filter true :insert false :update false}
            {:name "UpdateDate" :properties properties/datetime :type "string" :filter true :insert false :update false}]
   :default-params {:columns ["_rid" "name" "CreateDate" "UpdateDate"]
                    :order "id"
                    :asc "1"
                    :enable true
                    :page "1"
                    :limit "25"}
   :row-action [{:name "show" :url "/admin/group/show/{{id}}" :label "show" :title "Info" :icon "info"}
                {:name "edit" :url "/admin/group/show/{{id}}" :label "show" :title "Info" :icon "info"}]})
