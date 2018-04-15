(ns glurps.admin.actor.index
  (:require [glurps.admin.main :as main]
            [glurps.module.crud.list :as list]
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


(defn get-html []
  (main/get-html [:div
                  [:div "Actor list "]
                  (list/get-html {:field-id "id"
                                  :show-url "/admin/actor/show/{id}"
                                  :insert-url "/admin/actor/insert/{id}"
                                  :update-url "/admin/actor/update/{id}"
                                  :delete-url "/admin/actor/delete/{id}"}
                                 fields
                                 (actor-dao/get-list 2 3))]))
