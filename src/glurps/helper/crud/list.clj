(ns glurps.helper.crud.list
  (:require [glurps.helper.html.html :as html-helper]))



(defn get-field-display [field-name record & field-display-map]
  (let [field-display-function
        ((first field-display-map) (keyword field-name))]
    (if field-display-function
      (field-display-function record)
      ((keyword field-name) record))))

(defn get-html [{:keys [field-display-map
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
          (get-field-display column record field-display-map)
          ])
       [:td
        (html-helper/get-action-html
         spec
         record
         (record (keyword field-id)))]])]])
