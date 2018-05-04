(ns glurps.process.crud.show
  (:require [glurps.admin.main :as main]
            [glurps.process.field.field :as field]))

(defn get-html [columns record fields]
  [:table {:class "ui definition table"}
   [:tbody
    (for [column columns]
      [:tr
       [:td {:width 50} column]
       [:td (field/get-field-html2 column record fields true)]])]])
