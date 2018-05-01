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

(defn get-html [id]
  (let [actor-record (actor-dao/find-by-id id)]
    (main/admin-page-html-wrapper
     setting/list-conf
     main/module-type-edit
     (crud-update/get-html actor-record
                           (:fields setting/list-conf))
     [actor-record])))

(defn get-html-insert [id]
  (main/admin-page-html-wrapper
   setting/list-conf
   main/module-type-edit
   [:div (pr-str id)
    (crud-update/get-html nil (:fields setting/list-conf))]))

(defn try-insert [raw-data]
  "Try to insert raw-data into database. Do a validation before."
  (try 
    (do (validation/check-fields ((:fields setting/list-conf) :fields) raw-data)
        (let [actor-record (actor-model/make-actor raw-data)]
          (actor-dao/insert actor-record)))
    (catch Exception e e)))

(defn try-update [id raw-data]
  "Try to update raw-data into database. Do a validation before."
  (do (validation/check-fields (:fields setting/list-conf) raw-data)
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
