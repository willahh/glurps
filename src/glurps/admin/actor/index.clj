(ns glurps.admin.actor.index
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.helper.field.image :as image]
            [glurps.helper.crud.list :as list]
            [glurps.model.actor-dao :as actor-dao]
            [glurps.model.actor-dto :as actor-dto]))

;; (def fields (actor-dto/get-fields))
(def fields ["id"
             "name"
             "job"
             "nationality"
             "age"
             "birthdate"
             "picture"])

(defn field-display-picture [record]
  (let [image-name (str "actor_" (record :id) ".jpg")
        url (str (config/get :upload-filepath) image-name)]
    (image/get-html image-name url)))

(def field-display-map
  "A map of key field-name, value display-function"
  {:picture field-display-picture})

(defn get-html []
  (main/get-html [:div
                  [:div "Actor list "]
                  (list/get-html {:field-display-map field-display-map
                                  :field-id "id"
                                  :show-url "/admin/actor/show/{id}"
                                  :insert-url "/admin/actor/insert/{id}"
                                  :update-url "/admin/actor/update/{id}"
                                  :delete-url "/admin/actor/delete/{id}"}
                                 fields
                                 (actor-dao/get-list 2 3))]))
