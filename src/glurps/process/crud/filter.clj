(ns glurps.process.crud.filter
  (:require [glurps.process.html.html :as html-helper]
            [glurps.process.field.field :as field]))

(defn- get-select [field-name options]
  (let [selected-option (first (filter #(= (:value %) (:name %)) options))]
    [:div {:class "ui selection dropdown"}
     [:input {:type "hidden" :name field-name :value (:value selected-option)}]
     [:i {:class "dropdown icon"}]
     [:div {:class "text"} (:label selected-option)]
     [:div {:class "menu"}
      (for [option options]
        [:div (conj {:class "item" :data-value (:name option)}
                    (when (= (:name option) (:value option)) {:selected "true"})) (:label option)])]]))

(defn- get-select-option-html [name value label]
  [:option (conj {:value name} 
                 (when (= name value) {:selected "selected"}))
   label])

(defn- get-checkbox-html [name value label enable-columns]
  [:div {:class "ui toggle checkbox"}
   [:input (conj {:type "checkbox" :name name :value value}
                 (when (some #(= value %) enable-columns)
                   {:checked "true"}))]
   [:label label]])

(defn- get-radio-html [name value label]
  [:label [:input (conj {:type "radio" :name name :value value}
                        (when (= name value) {:checked true}
                              {:checked "true"})) label]])

(defn get-html [columns params filter-fields]
  [:div {:class "ui basic modal"}
   [:div {:class "ui icon header"}
    [:i {:class "archive icon"}] "Test"]
   [:div.content
    [:form {:class "filter" :action "" :method "post"}
     [:div
      [:table {:class "ui definition table"}
       [:tbody
        [:tr 
         [:td "Columns"]
         [:td 
          [:div {:class "grouped fields"}
           (for [column columns]
             [:div.field (get-checkbox-html "columns" column column (:columns params))])]]
         ]
        [:tr 
         [:td "Favs"]
         [:td 
          (get-checkbox-html "fav" (:fav params) "Favorite" ["on"])]
         ]
        [:tr 
         [:td "Order by"]
         [:td 
          (get-select "order" [{:name "id" :value (:order params) :label "Id"}
                               {:name "name" :value (:order params) :label "Name"}])]]
        [:tr 
         [:td "Asc"]
         [:td 
          (get-select "asc" [{:name "1" :value (:asc params) :label "Asc"}
                             {:name "0" :value (:asc params) :label "Desc"}])]
         ]
        [:tr 
         [:td "Page"]
         [:td 
          (get-select "page" 
                      (for [i  (into [] (range 1 10))]
                        {:name (str i) :value (:page params) :label (str "Page" i)}))]
         ]
        [:tr 
         [:td "Row per page"]
         [:td 
          (get-select "limit" 
                      (for [i ["2" "5" "10" "25" "50" "100" "250" "500"]]
                        {:name i :value (:limit params) :label i}))]
         ]]]
      [:div.submit
       [:input {:type "submit" :class "ui button" :value "Submit"}]
       [:input {:class "ui button" :value "Cancel"}]]]]]])
