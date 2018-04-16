(ns glurps.admin.actor.index
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.helper.field.image :as field-image]
            [glurps.helper.crud.list :as crud-list]
            [glurps.model.actor-dao :as actor-dao]
            [glurps.model.actor-dto :as actor-dto]))

(def view-layout
  "Optional view layout configuration"
  {:fields ["id"
            "name"
            "job"
            "nationality"
            "age"
            "birthdate"
            "picture"]
   :field-html-display {:picture field-image/get-html}})

(defn get-html []
  (main/get-html [:div
                  [:div "Actor list "]
                  (crud-list/get-html {:field-id "id"
                                       :show-url "/admin/actor/show/{id}"
                                       :insert-url "/admin/actor/insert/{id}"
                                       :update-url "/admin/actor/update/{id}"
                                       :delete-url "/admin/actor/delete/{id}"}
                                      (view-layout :fields)
                                      (actor-dao/get-list 1 50)
                                      view-layout)]))
