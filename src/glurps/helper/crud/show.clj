(ns glurps.helper.crud.show
  (:require [glurps.helper.field.field :as field]))

(defn get-html [columns record & view-layout]
  [:table {:class "table showTable" :style "border: 1px solid #000; width: auto;"}
   [:tbody
    (for [column columns]
      [:tr
       [:td {:width 50} column]
       [:td (field/get-field-html column record (first view-layout))]])]])
