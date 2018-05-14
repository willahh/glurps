(ns glurps.process.crud.update
  (:require [wlh.utils :as utils]
            [glurps.admin.user.setting :as setting]
            [ring.util.response :as response]
            [glurps.admin.main :as main]
            [wlh.validation :as validation]
            [glurps.process.field.field :as field]))

(defn parse-value [value type]
  (case type
    "string" (when value (str value))
    "integer" (when value (Integer. value))
    value))

(defn map-params-to-raw-data [fields params]
  (reduce conj (map (fn [m]
                      (let [key (keyword (:name m))
                            type (:type m)]
                        {key (parse-value (key params) type)}))
                    fields)))

(defn try-insert [fields raw-data make-model-fn dao-insert-fn]
  "Try to insert raw-data into database. Do a validation before."
  (try 
    (do (validation/check-fields fields raw-data)
        (let [record (make-model-fn raw-data)]
          (dao-insert-fn record)))
    (catch Exception e e)))

(defn try-update [fields id raw-data make-model-fn dao-update-fn]
  "Try to update raw-data into database. Do a validation before."
  (do (validation/check-fields fields raw-data)
      (let [record (into {} (filter second (make-model-fn raw-data)))]
        (dao-update-fn record id))))

(defn handle-insert [list-conf fields params redirect-url make-model-fn dao-insert-fn]
  (let [record-content params]
    (dao-insert-fn record-content)
    (response/redirect redirect-url)))

(defn handle-update [list-conf params redirect-url make-model-fn dao-update-fn]
  (let [record-content params
        field-id (keyword (:field-id list-conf))
        id (field-id params)]
    (dao-update-fn record-content id)
    (response/redirect redirect-url)))

(defn get-html-multiple [session params state list-conf records fields count]
  [:div
   [:form {:class "ui form" :action "" :method "POST"}
    [:input {:type "hidden" :name "count" :value count}]
    [:div {:style "padding: 20px 0;"} (:error-message params)]    
    [:div.column
     (when (> count 1 )
       [:div.ui.pointing.secondary.menu
        (for [i (range count)]
          [:a {:class (str "item" (when (= i 0) " active")) :data-tab i} (inc i)])])
     (let [html (atom [])] 
       (dotimes [i count] 
         (swap! html conj                 
                (let [record (nth records i)
                      id-name (:field-id list-conf)
                      id ((keyword id-name) record)]                  
                  [:div {:class (str "ui tab segment" (when (= i 0) " active")) :data-tab i}
                   (when id 
                     [:input {:type "hidden" :name (str id-name "[]") :value (clojure.string/replace id "#" "")}])
                   [:table {:class "ui definition table"}
                    [:tbody
                     (for [field fields]
                       (let [visible (utils/some-field-test? (:update field))]
                         (when visible
                           [:tr 
                            [:td {:width 50} (:name field)]
                            [:td (field/get-field-html field record fields false)]])))
                     
                     
                     ;; [:tr
                     ;;  [:td "Users"]
                     ;;  [:td 
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     ;;   [:div.ui.fluid.multiple.search.selection.dropdown
                     ;;    [:input
                     ;;     {:name "tags", :type "hidden"}]
                     ;;    [:i.dropdown.icon]
                     ;;    [:div.default.text
                     ;;     "TODO"]
                     ;;    [:div.menu
                     ;;     [:div.item
                     ;;      {:data-value "angular"}
                     ;;      "Angular"]
                     ;;     [:div.item
                     ;;      {:data-value "css"}
                     ;;      "CSS"]
                     ;;     [:div.item
                     ;;      {:data-value "design"}
                     ;;      "Graphic Design"]
                     ;;     [:div.item
                     ;;      {:data-value "ember"}
                     ;;      "Ember"]
                     ;;     [:div.item
                     ;;      {:data-value "html"}
                     ;;      "HTML"]
                     ;;     [:div.item
                     ;;      {:data-value "ia"}
                     ;;      "Information Architecture"]
                     ;;     [:div.item
                     ;;      {:data-value "javascript"}
                     ;;      "Javascript"]
                     ;;     [:div.item
                     ;;      {:data-value "mech"}
                     ;;      "Mechanical Engineering"]
                     ;;     [:div.item
                     ;;      {:data-value "meteor"}
                     ;;      "Meteor"]
                     ;;     [:div.item
                     ;;      {:data-value "node"}
                     ;;      "NodeJS"]
                     ;;     [:div.item
                     ;;      {:data-value "plumbing"}
                     ;;      "Plumbing"]
                     ;;     [:div.item
                     ;;      {:data-value "python"}
                     ;;      "Python"]
                     ;;     [:div.item
                     ;;      {:data-value "rails"}
                     ;;      "Rails"]
                     ;;     [:div.item
                     ;;      {:data-value "react"}
                     ;;      "React"]
                     ;;     [:div.item
                     ;;      {:data-value "repair"}
                     ;;      "Kitchen Repair"]
                     ;;     [:div.item
                     ;;      {:data-value "ruby"}
                     ;;      "Ruby"]
                     ;;     [:div.item
                     ;;      {:data-value "ui"}
                     ;;      "UI Design"]
                     ;;     [:div.item
                     ;;      {:data-value "ux"}
                     ;;      "User Experience"]]]
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     ;;   ]]
                     
                     ]]
                   ])))
       (into [:div] @html))    
     [:script "$('.menu .item').tab();"]]
    [:div {:class "ui buttons sticky"}
     [:a {:class "ui button" :href (:path list-conf)} "Cancel"]
     [:div {:class "or"}]
     [:button {:class "ui positive button" :type "submit"} "Save"]]]])

(defn get-html [list-conf record fields]
  [:div "deprecated"])
