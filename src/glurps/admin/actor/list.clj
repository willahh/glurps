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
   :columns ["id"
             "name"
             "job"
             "nationality"
             "age"
             "birthdate"
             "picture"
             "date_create"
             "date_update"] 
   :filter-fields [{:key "sort-by" :name "Sort by"}
                   {:key "order-by" :name "Order by"}]
   :field-html-display {:picture field-image/get-html}})

(def default-params {:columns ["id" "name" "picture" "date_create" "date_update"]
                     :sort-by "id"
                     :asc "1"
                     :page "1"
                     :limit "25"})

(defn in? 
  "True if coll contains elm"
  [coll elm]  
  (some #(= elm %) coll))

(defn get-visible-columns [columns visible-columns visible-columns-default]
  (let [cols (filter (fn [col]
                       (in? visible-columns col)) columns)]
    (if (zero? (count cols)) 
      visible-columns-default
      cols)))

(defn get-html [{:keys [params session] :as query} & {:keys [disable?]}]
  (let [field-id "id"
        path (:path list-conf)
        columns (:columns list-conf)
        visible-columns (get-visible-columns columns (:columns params) (:columns default-params))
        page (if (:page params) 
               (Integer. (:page params))
               (Integer. (:page default-params)))
        limit (if (:limit params) 
                (Integer. (:limit params))
                (Integer. (:limit default-params)))
        count (actor-dao/count2)
        field-order (if (:order params)
                      (:order params) field-id)
        field-asc (if (:asc params)
                    (Integer. (:asc params)) true)
        offset (crud-list/get-pagination-offset page limit count)
        records (if disable?
                  (actor-dao/get-list-disable params offset limit)
                  (actor-dao/get-list2 (merge {:active 1} params) offset limit))]
    (main/get-html
     [:div 
      [:div session]
      (assoc session :count 2)
      ;; (assoc :session (assoc session :identity "foo"))
      [:h2 (:title list-conf)]
      [:div 
       [:div (str "debug params:" (pr-str params))]
       [:div (str "debug session:" session)]
       ]
      [:div 
       (crud-nav/get-html disable?)
       (crud-filter/get-html columns (merge default-params params) (:filter-fields list-conf))
       ;; (crud-list/get-list-option-html path offset limit count)
       (crud-list/get-html field-id
                           visible-columns
                           records
                           field-order
                           field-asc
                           list-conf)
       ;; (crud-list/get-list-option-html path offset limit count)
       ]])))


(get-html {:params {:columns ["id" "name" "picture" "date_create" "date_update"], :sort-by "id", :asc "0", :page "1", :limit "25"}})