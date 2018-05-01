(ns glurps.process.crud.update
  (:require [glurps.process.field.field :as field]))

(defn get-html [record view-layout]
  (let [columns (into [] (map #(:name %) (view-layout :fields)))]
    [:form {:class "ui form" :action "" :method "POST"}
     (for [column columns]
       [:div {:class "field"}
        [:label {:width 50} column]
        (field/get-field-html2 column record view-layout)])
     [:div {:class "ui buttons sticky"}
      [:a {:class "ui button" :href "../../actor"} "Cancel"]
      [:div {:class "or"}]
      [:button {:class "ui positive button" :type "submit"} "Save"]]]))

