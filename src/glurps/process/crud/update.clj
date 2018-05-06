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
      (let [record (make-model-fn raw-data)]
        (dao-update-fn (into {} (filter second record))
                       [(str "id = " id)]))))

(defn handle-insert [list-conf fields params redirect-url make-model-fn dao-update-fn]
  (let [raw-data (map-params-to-raw-data fields params)]
    (try-insert fields
                raw-data make-model-fn dao-update-fn)
    (response/redirect redirect-url)))

(defn handle-update [list-conf params redirect-url make-model-fn dao-update-fn]
  (let [raw-data (map-params-to-raw-data (:fields list-conf) params)]
    (try-update (:fields list-conf) (:id params) raw-data make-model-fn dao-update-fn)
    (response/redirect redirect-url)))

(defn get-html [record fields]
  [:form {:class "ui form" :action "" :method "POST"}
   [:table {:class "ui definition table"}
    [:tbody
     (for [field fields]
       (let [visible (utils/some-field-test? (:show field))]
         (when visible
           [:tr 
            [:td {:width 50} (:name field)]
            [:td (field/get-field-html field record fields false)]])))]]
   [:div {:class "ui buttons sticky"}
    [:a {:class "ui button" :href "../"} "Cancel"]
    [:div {:class "or"}]
    [:button {:class "ui positive button" :type "submit"} "Save"]]])
