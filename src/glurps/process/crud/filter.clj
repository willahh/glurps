(ns glurps.process.crud.filter
  (:require [glurps.process.html.html :as html-helper]
            ;; [ring.util.anti-forgery :refer [anti-forgery-field]]
            [glurps.process.field.field :as field]))

(defn- get-select-option-html [option-name option-value option-label]
  [:option (conj {:value option-name} 
                 (when (= option-name option-value) {:selected "selected"}))
   option-label])

(defn- get-checkbox-html [name value label enable-columns]
  [:label [:input (conj {:type "checkbox" :name name :value value}
                        (when (some #(= value %) enable-columns)
                          {:checked "true"})) label]])

(defn get-html [columns params filter-fields]
  [:form {:action "" :method "post"}
   
   ;; (anti-forgery-field)
   [:div
    [:table {:class "table filterTable " :style "border: 1px solid #000"}
     ;; [:thead
     ;;  [:tr
     ;;   [:th ""]
     ;;   (for [field filter-fields]
     ;;     [:th field])
     ;;   [:th "actions"]]]
     
     ;; [:tbody
     ;;  (for [field filter-fields]          
     ;;    [:tr
     ;;     [:td "a"]
     ;;     [:td "b"]])]
     [:tbody
      [:tr 
       [:td "Columns"]
       [:td 
        (for [column columns]
          (get-checkbox-html "columns" column column (:columns params)))]
       ]
      [:tr 
       [:td "Sort by"]
       [:td 
        [:select {:name "sort-by"}
         (get-select-option-html "id" (:sort-by params) "Id")
         (get-select-option-html "name" (:sort-by params) "Name")]]
       ]
      [:tr 
       [:td "Order by"]
       [:td 
        [:select {:name "order-by"}
         (get-select-option-html "asc" (:order-by params)  "Asc")
         (get-select-option-html "desc" (:order-by params) "Desc")]]
       ]
      [:tr 
       [:td "Page"]
       [:td 
        [:select {:name "page"}
         (for [i (into [] (range 0 10))]
           (get-select-option-html i (:page params) i))]]
       ]
      [:tr 
       [:td "Row per page"]
       [:td 
        [:select {:name "limit"}
         (for [i ["2" "5" "10" "25" "50" "100" "250" "500"]]
           (get-select-option-html i (:limit params) i))]]
       ]]]
    [:div.submit
     [:input {:type "submit" :class "btn btn-primary" :value "Submit"}]
     [:input {:class "btn" :value "Cancel"}]]]])
