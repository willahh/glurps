(ns glurps.process.crud.update
  (:require [glurps.admin.main :as main]
            [glurps.process.field.field :as field]))

(defn get-html [record fields]
  (let [columns (into [] (map #(:name %) fields))]
    [:form {:class "ui form" :action "" :method "POST"}
     (for [column columns]
       [:div {:class "field"}
        [:label {:width 50} column]
        (field/get-field-html2 column record fields false)])
     [:div {:class "ui buttons sticky"}
      [:a {:class "ui button" :href "../../actor"} "Cancel"]
      [:div {:class "or"}]
      [:button {:class "ui positive button" :type "submit"} "Save"]]]))
