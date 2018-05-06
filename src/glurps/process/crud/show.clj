(ns glurps.process.crud.show
  (:require [glurps.admin.main :as main]
            [glurps.process.field.field :as field]))

(defn get-html [records record fields]
  [:table {:class "ui definition table"}
   [:tbody
    (for [rec records]
      [:tr
       [:td {:width 50} (:name rec)]
       [:td (field/get-field-html2 rec record fields true)]])]])
