(ns glurps.helper.crud.update
  (:require [glurps.helper.field.field :as field]))

(defn get-html [record view-layout]
  (let [columns (into [] (map #(:name %) (view-layout :fields)))]
    [:table {:class "table showTable" :style "border: 1px solid #000; width: auto;"}
     [:tbody
      (for [column columns]
        [:tr
         [:td {:width 50} column]
         [:td (field/get-field-html2 column record view-layout)]])]]))
