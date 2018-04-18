(ns glurps.admin.actor.trash
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.process.field.image :as field-image]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.actor.actor-dao :as actor-dao]))

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

(def field-id "id")
(def urls [{:type "show" :name "show" :url "/admin/actor/show/{id}"}
           {:type "insert" :name "insert" :url "/admin/actor/insert/{id}"}
           {:type "update" :name "update" :url "/admin/actor/update/{id}"}
           {:type "delete" :name "delete" :url "/admin/actor/delete/{id}"}
           {:type "trash" :name "trash" :url "/admin/actor/trash/{id}"}])

(defn get-html []
  (main/get-html [:div
                  [:div "Actor list trash "]
                  [:a {:class "btn btn-primary" :href "/admin/actor/insert"} "Add"]
                  [:a {:class "btn" :href "/admin/actor"} "List"]
                  (crud-list/get-html field-id
                                      urls
                                      (view-layout :fields)
                                      (actor-dao/get-list 1 50)
                                      view-layout)]))
