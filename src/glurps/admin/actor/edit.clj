(ns glurps.admin.actor.edit
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.show :as crud-show]
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

(defn get-html [id]
  (main/get-html
   (let [actor-record (actor-dao/get-by-id id)]
     (crud-show/get-html (view-layout :fields)
                         actor-record
                         view-layout))))
