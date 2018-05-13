(ns glurps.component.pagination.pagination
  (:require [glurps.component.form.select :as select]))

(defn pagination-html []
  [:div {:class "ui pagination menu"}
   [:a {:class "active item"} 1]
   [:a {:class "disabled item"} "..."]
   [:a {:class "item"} 10]
   [:a {:class "item"} 11]
   [:a {:class "item"} 12]])

(defn pager []
  [:div {:class "ui menu"}
   [:div {:class "item"}
    (pagination-html)]
   [:div {:class "item"}
    (select/select-html "2" "limit" [{:name "2" :value "2" :label "2"}
                                     {:name "10" :value "10" :label "10"}
                                     {:name "25" :value "25" :label "25"}]
                        {:width 100})]
   [:div {:class "item"}
    (select/select-html "1" "page" [{:name "1" :value "1" :label "Page 1"}
                                    {:name "2" :value "2" :label "Page 2"}])]])
