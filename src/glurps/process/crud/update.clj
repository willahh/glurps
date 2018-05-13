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
                           [:td (field/get-field-html field record fields false)]])))]]
                  ])))
      (into [:div] @html))    
    [:script "$('.menu .item').tab();"]]   
   [:form {:class "ui form" :action "" :method "POST"}
    [:input {:type "hidden" :name "count" :value count}]
    [:div {:style "padding: 20px 0;"} (:error-message params)]    
    [:div {:class "ui buttons sticky"}
     [:a {:class "ui button" :href (:path list-conf)} "Cancel"]
     [:div {:class "or"}]
     [:button {:class "ui positive button" :type "submit"} "Save"]]]])

(defn get-html [list-conf record fields]
  [:div "deprecated"])
