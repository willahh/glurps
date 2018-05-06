(ns glurps.process.crud.show
  (:require [wlh.utils :as utils]
            [glurps.admin.main :as main]
            [glurps.process.field.field :as field]))

(defn get-html [fields record]
  [:table {:class "ui definition table"}
   [:tbody
    (for [field fields]
      (let [visible (utils/some-field-test? (:show field))]
        (when visible
          [:tr
           [:td {:width 50} (:name field)]
           [:td (field/get-field-html field record fields true)]])))]])
