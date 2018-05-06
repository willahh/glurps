(ns glurps.process.crud.filter
  (:require [glurps.process.html.html :as html-helper]
            [glurps.component.form.select :as select]
            [glurps.process.field.field :as field]))

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

(defn get-html [columns params]
  [:form {:class "ui basic modal" :action "" :method "post"}
   [:div.content
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
        (select/select-html "order" [{:name "id" :value (:order params) :label "Id"}
                                     {:name "name" :value (:order params) :label "Name"}])]]
      [:tr 
       [:td "Asc"]
       [:td 
        (select/select-html "asc" [{:name "1" :value (:asc params) :label "Asc"}
                                   {:name "0" :value (:asc params) :label "Desc"}])]
       ]
      [:tr 
       [:td "Page"]
       [:td 
        (select/select-html "page" 
                            (for [i  (into [] (range 1 10))]
                              {:name (str i) :value (:page params) :label (str "Page" i)}))]
       ]
      [:tr 
       [:td "Row per page"]
       [:td 
        (select/select-html "limit" 
                            (for [i ["2" "5" "10" "25" "50" "100" "250" "500"]]
                              {:name i :value (:limit params) :label i}))]
       ]]]
    ]
   [:div.actions
    [:div {:class "ui red basic cancel inverted button"}
     [:i {:class "remove icon"}] "Cancel"]
    [:button {:type "submit ":class "ui green ok inverted button"}
     [:i {:class "checkmark icon"}] "Validate"]]])
