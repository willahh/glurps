(ns glurps.admin.actor.show
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.helper.field.image :as field-image]
            [glurps.helper.crud.show :as crud-show]
            [glurps.model.actor-dao :as actor-dao]
            [glurps.model.actor-dto :as actor-dto]))


(def field-presentation
  "A map of key field-name, value presentation-function"
  {:picture field-image/get-html})

(defn get-html [id]
  (main/get-html
   (let [actor-record (actor-dao/get-by-id id)]
     (crud-show/get-html {:presentation field-presentation}
                         (actor-dto/get-fields) actor-record))))
