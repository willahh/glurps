(ns glurps.module.crud.list
  (:require [glurps.module.html.html-helper :as htmlhelper]))

(defn get-html [{:keys [field-id
                        show-url
                        update-url
                        delete-url]} columns records]
  [:table {:class "table listTable" :style "border: 1px solid #000"}
   [:thead
    [:tr
     (for [column columns]          
       [:th column])
     [:th "actions"]]]
   [:tbody
    (for [record records]          
      [:tr
       [:td field-id "<input type=\"checkbox\">"]
       (for [column columns]
         [:td ((keyword column) record)
          (htmlhelper/get-field-html column "show" record)])
       [:td (htmlhelper/get-action-html record
                                        (record (keyword field-id)))]])]])
