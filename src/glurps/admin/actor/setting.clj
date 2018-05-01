(ns glurps.admin.actor.setting
  (:require [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(def list-conf
  {:path "/admin/actor"
   :module-name "actor"
   :field-id "id"
   :field-label "name"
   :columns ["id"
             "name"
             "job"
             "nationality"
             "age"
             "birthdate"
             "picture"
             "date_create"
             "date_update"] 
   :filter-fields [{:key "asc" :name "Sort by"}
                   {:key "order" :name "Order by"}]
   :field-html-display {:picture field-image/get-html}})

(def default-params {:columns ["id" "name" "picture" "date_create" "date_update"]
                     :order "id"
                     :asc "1"
                     :page "1"
                     :limit "25"})