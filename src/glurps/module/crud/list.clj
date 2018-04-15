(ns glurps.module.crud.list
  (:require [glurps.module.html.html-helper :as html-helper]))

(defn get-html [{:keys [field-id
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
         [:td ((keyword column) record)
          (html-helper/get-field-html column "show" record)])
       [:td
        (html-helper/get-action-html
         spec
         record
         (record (keyword field-id)))]])]])
