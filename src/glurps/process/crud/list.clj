(ns glurps.process.crud.list
  (:require [glurps.process.html.html :as html-helper]
            [glurps.process.field.field :as field]))

(defn get-html [{:keys [field-id
                        show-url
                        update-url
                        delete-url] :as spec} columns records & view-layout]
  [:table {:class "table listTable" :style "border: 1px solid #000"}
   [:thead
    [:tr
     [:th ""]
     (for [column columns]
       [:th column])
     [:th "actions"]]]
   [:tbody
    (for [record records]          
      [:tr
       [:td "<input type=\"checkbox\">"]
       (for [column columns]
         [:td
          (field/get-field-html column record (first view-layout))
          ])
       [:td
        (html-helper/get-action-html
         spec
         record
         (record (keyword field-id)))]])]])