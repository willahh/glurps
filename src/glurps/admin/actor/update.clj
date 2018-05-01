(ns glurps.admin.actor.update
  (:require [ring.util.response :as response]
            [wlh.validation :as validation]
            [glurps.admin.actor.setting :as setting]
            [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.admin.actor.list :as list]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.update :as crud-update]
            [glurps.model.actor.actor-dao :as actor-dao]
            [glurps.model.actor.actor-model :as actor-model]))

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

(defn get-html [id]
  (let [actor-record (actor-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-edit
     (crud-update/get-html actor-record
                           view-layout)
     [actor-record])))

(defn get-html-insert [id]
  (main/admin-page-html-wrapper
   setting/list-conf
   main/module-type-edit
   [:div (pr-str id)
    (crud-update/get-html nil view-layout)]))

(defn try-insert [raw-data]
  "Try to insert raw-data into database. Do a validation before."
  (try 
    (do (validation/check-fields (view-layout :fields) raw-data)
        (let [actor-record (actor-model/make-actor raw-data)]
          (actor-dao/insert actor-record)))
    (catch Exception e e)))

(defn try-update [id raw-data]
  "Try to update raw-data into database. Do a validation before."
  (do (validation/check-fields (view-layout :fields) raw-data)
      (let [actor-record (actor-model/make-actor raw-data)]
        (actor-dao/update! (into {} (filter second actor-record))
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
    (response/redirect "../../actor")))

(defn handle-delete [actor-id]
  (actor-dao/delete actor-id)
  (main/get-html [:div "ok"]))
