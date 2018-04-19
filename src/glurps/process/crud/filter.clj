(ns glurps.process.crud.filter
  (:require [glurps.process.html.html :as html-helper]
            [glurps.process.field.field :as field]))

(defn get-html [filter-fields]
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
       [:td "b"]])]])
