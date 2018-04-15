(ns glurps.admin.actor.index
  (:require [glurps.admin.main :as main]
            [glurps.module.crud.list :as list]
            [glurps.model.actor-dao :as actor-dao]
            [glurps.model.actor-dto :as actor-dto]))



;; (def actor (actor-dto/make-actor {:alloid 10
;;                                   :name "ok"
;;                                   :job "Yo"
;;                                   :nationality "test"
;;                                   :age 30
;;                                   :birthdate "a"
;;                                   :filmography "ok"
;;                                   :picture "a"}))

(def fields (actor-dto/get-fields))
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
                                  :show-url "/admin/actor/show/10"
                                  :update-url "/admin/actor/update/10"
                                  :delete-url "/admin/actor/delete/10"}
                                 fields
                                 (actor-dao/get-list 2 3))]))
