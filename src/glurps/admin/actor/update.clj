(ns glurps.admin.actor.update
  (:require [wlh.validation :as validation]
            [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.admin.actor.index :as list]
            [glurps.helper.field.image :as field-image]
            [glurps.helper.crud.update :as crud-update]
            [glurps.model.actor-dao :as actor-dao]
            [glurps.model.actor-dto :as actor-dto]))

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
            ;; {:name "id" :type "integer"}
            {:name "alloid" :type "integer"}
            {:name "name" :type "string" :validator string?}
            {:name "job" :type "string" :validator string?}
            {:name "nationality" :type "string" :validator string?}
            {:name "age" :type "integer" :validator integer?}
            {:name "birthdate" :type "string" :validator valid-birthdate?}
            {:name "picture" :type "string" :validator valid-picture?}]})

(defn get-html [id]
  (main/get-html
   [:div (pr-str id)
    (let [actor-record (actor-dao/get-by-id id)]
      (crud-update/get-html actor-record
                            view-layout))]))

(defn try-insert [raw-data]
  "Try to insert raw-data into database. Do a validation before."
  (try 
    (do (validation/check-fields (view-layout :fields) raw-data)
        (let [actor-record (actor-dto/make-actor raw-data)]
          (actor-dao/insert actor-record)))
    (catch Exception e e)))

(defn try-update [id raw-data]
  "Try to update raw-data into database. Do a validation before."
  (do (validation/check-fields (view-layout :fields) raw-data)
      (let [actor-record (actor-dto/make-actor raw-data)]
        (actor-dao/update (into {} (filter second actor-record))
                          [(str "id = " id)]))))

(defn handle-insert [params]
  (main/get-html
   (let [raw-data
         {:alloid (Integer. (params :alloid))
          :name (params :name)
          :job (params :job)
          :nationality (params :nationality)
          :age (Integer. (params :age))
          :birthdate (params :birthdate)
          :picture (params :picture)}]
     [:div (pr-str raw-data)
      (try-insert raw-data)])))

(defn handle-update [params]
  (let [raw-data
        {:alloid (Integer. (params :alloid))
         :name (params :name)
         :job (params :job)
         :nationality (params :nationality)
         :age (Integer. (params :age))
         :birthdate (params :birthdate)
         :picture (params :picture)}]
    (try-update (params :id) raw-data)
    (list/get-html)))

(defn handle-delete [actor-id]
  (actor-dao/delete actor-id)
  (main/get-html [:div "ok"]))