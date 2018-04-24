(ns glurps.process.crud.filter
  (:require [glurps.process.html.html :as html-helper]
            [glurps.process.field.field :as field]))

(defn- get-select-option-html [field-name field-value field-label]
  [:option (conj {:value field-name} 
                 (when (= field-name field-value) {:selected "selected"}))
   field-label])

(defn get-html [page-params filter-fields]
  [:form {:action "" :method "post"}
   [:div
    [:table {:class "table filterTable " :style "border: 1px solid #000"}
     [:thead
      [:tr
       [:th ""]
       (for [field filter-fields]
         [:th field])
       [:th "actions"]]]
     [:tbody
      (for [field filter-fields]          
        [:tr
         [:td "a"]
         [:td "b"]])]
     [:tbody
      [:tr 
       [:td "Sort by"]
       [:td 
        [:select {:name "sort-by"}
         (get-select-option-html "" (:sort-by page-params)  "-")
         (get-select-option-html "id" (:sort-by page-params) "Id")
         (get-select-option-html "name" (:sort-by page-params) "Name")]]
       ]
      [:tr 
       [:td "Order by"]
       [:td 
        [:select {:name "order-by"}
         (get-select-option-html "asc" (:order-by page-params)  "Asc")
         (get-select-option-html "desc" (:order-by page-params) "Desc")]]
       ]]]
    [:div.submit
     [:input {:type "submit" :class "btn btn-primary" :value "Submit"}]
     [:input {:class "btn" :value "Cancel"}]]]])
