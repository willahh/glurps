(ns glurps.admin.actor.list
  (:require [glurps.admin.main :as main]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.list :as crud-list]
            [glurps.process.crud.nav :as crud-nav]
            [glurps.process.crud.filter :as crud-filter]
            [glurps.model.actor.actor-dao :as actor-dao]))

(def list-conf
  "Optional view layout configuration"
  {:path "/admin/actor"
   :title "Actor list"
   :fields ["id"
            "name"
            "job"
            "nationality"
            "age"
            "birthdate"
            "picture"
            "date_create"
            "date_update"]
   :limit 2
   :filter-fields [{:key "sort-by" :name "Sort by"}
                   {:key "order-by" :name "Order by"}]
   :field-html-display {:picture field-image/get-html}})

(defn get-html [& {:keys [disable?
                          page
                          filter-params] 
                   :or {page 1
                        param-params {}}
                   :as params}]
  (let [field-id "id"
        path (:path list-conf)
        fields (:fields list-conf)
        filter-fields (:filter-fields list-conf)
        limit (:limit list-conf)
        urls (crud-list/get-action-html disable?)
        count (actor-dao/count2)
        offset (crud-list/get-pagination-offset page limit count)
        records (if disable?
                  (actor-dao/get-list-disable filter-params offset limit)
                  (actor-dao/get-list2 filter-params offset limit))]
    (main/get-html
     [:div 
      [:h2 (:title list-conf)]
      [:div (str "debug page params:" (pr-str filter-params))]
      [:div 
       (crud-nav/get-html disable?)
       (crud-list/get-list-option-html path offset limit count)
       (crud-filter/get-html filter-params filter-fields)
       (crud-list/get-html field-id
                           urls
                           fields
                           records
                           list-conf)
       (crud-list/get-list-option-html path offset limit count)]])))


