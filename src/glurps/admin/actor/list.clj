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
   :fields ["id"
            "name"
            "job"
            "nationality"
            "age"
            "birthdate"
            "picture"]
   :filter-fields [{:name "name"}
                   {:name "age"}]
   :field-html-display {:picture field-image/get-html}})

(defn get-html [& {:keys [disable?
                          page] :or {page 1} :as params}]
  (let [field-id "id"
        urls (crud-list/get-action-html disable?)
        path (:path list-conf)
        fields (:fields list-conf)
        filter-fields (:filter-fields list-conf)
        limit 2
        count (actor-dao/count)
        offset (crud-list/get-pagination-offset page limit count)]
    (main/get-html
     [:div 
      [:h2 "Actor list"]
      [:div 
       (crud-nav/get-html disable?)
       (crud-list/get-list-option-html path offset limit count)
       (crud-filter/get-html filter-fields)
       (crud-list/get-html field-id
                           urls
                           fields
                           (if disable?
                             (actor-dao/get-list-disable offset limit)
                             (actor-dao/get-list offset limit))
                           list-conf)
       (crud-list/get-list-option-html path offset limit count)]])))
