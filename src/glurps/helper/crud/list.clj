(ns glurps.helper.crud.list
  (:require [glurps.helper.html.html :as html-helper]
            [glurps.helper.field.field :as field]))

(defn get-html [{:keys [presentation
                        field-id
                        show-url
                        update-url
                        delete-url] :as spec} columns records]
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
          (field/get-field-html column record presentation)
          ])
       [:td
        (html-helper/get-action-html
         spec
         record
         (record (keyword field-id)))]])]])
