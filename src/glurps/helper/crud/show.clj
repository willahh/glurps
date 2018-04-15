(ns glurps.helper.crud.show
  (:require [glurps.helper.field.field :as field]))

(defn get-html [{:keys [presentation] :as spec}
                columns record]
  [:table {:class "table showTable" :style "border: 1px solid #000; width: auto;"}
   [:tbody
    (for [column columns]
      [:tr
       [:td {:width 50} column]
       [:td (field/get-field-html column record presentation)]
       ;; [:td ((keyword column) record)]
       ])]])
