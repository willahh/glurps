(ns glurps.admin.asset.update
  (:require [ring.util.response :as response]
            [glurps.config :as config]
            [glurps.admin.asset.setting :as setting]
            [wlh.validation :as validation]
            [glurps.admin.main :as main]
            [glurps.admin.asset.list :as list]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.update :as crud-update]
            [glurps.model.asset.asset-dao :as asset-dao]
            [glurps.model.asset.asset-model :as asset-model]))

(defn valid-birthdate? [value]
  (and (= (type value) java.lang.String)
       (some? value)
       (not-empty value)))

(defn valid-filmography? [value]
  (and (= (type value) java.lang.String)
       (some? value)
       (not-empty value)))

(defn valid-picture? [value]
  (and (= (type value) java.lang.String)
       (some? value)
       (not-empty value)))

(def view-layout
  "View layout configuration"
  {:fields [
            {:name "alloid" :type "integer"}
            {:name "name" :type "string" :validator string?}
            {:name "job" :type "string" :validator string?}
            {:name "nationality" :type "string" :validator string?}
            {:name "age" :type "integer" :validator integer?}
            {:name "birthdate" :type "string" :validator valid-birthdate?}
            {:name "picture" :type "picture" :validator valid-picture?}]})

;; (defn get-html [id]
;;   (main/get-html
;;    [:div (pr-str id)
;;     (let [asset-record (asset-dao/find-by-id id)]
;;       (crud-update/get-html asset-record
;;                             (:fields setting/list-conf)))]))

(defn get-html [id]
  (let [record (asset-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-edit
     (crud-update/get-html record
                           (:fields setting/list-conf))
     [record])))

(defn get-html-insert [id]
  (main/get-html
   [:div (pr-str id)
    (crud-update/get-html nil (:fields setting/list-conf))]))

(defn try-insert [raw-data]
  "Try to insert raw-data into database. Do a validation before."
  (try 
    (do (validation/check-fields (:fields setting/list-conf) raw-data)
        (let [asset-record (asset-model/make raw-data)]
          (asset-dao/insert asset-record)))
    (catch Exception e e)))

(defn try-update [id raw-data]
  "Try to update raw-data into database. Do a validation before."
  (try 
    (do (validation/check-fields (:fields setting/list-conf) raw-data)
        (let [asset-record (asset-model/make raw-data)]
          (asset-dao/update! (into {} (filter second asset-record))
                             [(str "id = " id)])))
    (catch Exception e e)))



(defn parse-value [value type]
  (case type
    "string" (when value (str value))
    "integer" (when value (Integer. value))
    value))

(defn map-params-to-raw-data [params]
  (reduce conj (map (fn [m]
                      (let [key (keyword (:name m))
                            type (:type m)]
                        {key (parse-value (key params) type)}))
                    (:fields setting/list-conf))))

;; (map-params-to-raw-data {:id 2
;;                          :description "ok"})

(defn handle-insert [params]
  (main/get-html
   (let [raw-data (map-params-to-raw-data params)]
     (try-insert raw-data)
     (response/redirect "../../asset"))))

(defn handle-update [params]
  (let [raw-data (map-params-to-raw-data params)]
    (try-update (:id params) raw-data)
    (response/redirect "../../asset")))

(defn handle-delete [asset-id]
  (asset-dao/delete asset-id)
  (main/get-html [:div "ok"]))
