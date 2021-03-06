(ns glurps.admin.actor.setting
  (:require [wlh.validation :as validation]
            [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(def list-conf
  {:path "/admin/actor"
   :module-name "actor"
   :field-id "id"
   :field-label "name"
   :field-image "picture"
   :fields [
            {:name "id" :type "integer"}
            {:name "alloid" :type "integer"}
            {:name "name" :type "string" :validator string?}
            {:name "job" :type "string" :validator string?}
            {:name "nationality" :type "string" :validator string?}
            {:name "age" :type "integer" :validator integer?}
            {:name "birthdate" :type "string" :validator validation/valid-birthdate?}
            {:name "picture" :type "picture" :validator validation/valid-picture?}
            {:name "date_create" :type "string"}
            {:name "date_update" :type "string"}]
   :filter-fields ["id" "name"]
   :default-params {:columns ["id" "name" "picture" "date_create" "date_update"]
                    :order "id"
                    :display "list"
                    :asc "1"
                    :page "1"
                    :disable false
                    :limit "25"}})
