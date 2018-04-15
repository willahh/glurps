(ns glurps.admin.actor.update
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.helper.field.image :as field-image]
            [glurps.helper.crud.update :as crud-update]
            [glurps.model.actor-dao :as actor-dao]
            [glurps.model.actor-dto :as actor-dto]))

(def view-layout
  "View layout configuration"
  {:fields [{:name "id" :type "integer"}
            {:name "name" :type "string"}
            {:name "job" :type "string"}
            {:name "nationality" :type "string"}
            {:name "age" :type "integer"}
            {:name "birthdate" :type "string"}
            {:name "picture" :type "string"}]})

(defn get-html [id]
  (main/get-html
   (let [actor-record (actor-dao/get-by-id id)]
     (crud-update/get-html actor-record
                           view-layout))))
