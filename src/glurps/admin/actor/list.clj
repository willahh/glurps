(ns glurps.admin.actor.list
  (:require [glurps.admin.main :as main]
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

(defn get-action-disable-url [disable?]
  (if disable?
    {:type "enable" :name "enable" :url "/admin/actor/enable/{id}"}
    {:type "disable" :name "disable" :url "/admin/actor/disable/{id}"}))

(defn get-disable-link [disable?]
  (if disable?
    [:a {:class "btn" :href "/admin/actor"} "List"]
    [:a {:class "btn" :href "/admin/actor/trash"} "Trash"]))

(defn get-html [& {:keys [disable?]}]
  (def urls [{:type "show" :name "show" :url "/admin/actor/show/{id}"}
             {:type "update" :name "update" :url "/admin/actor/update/{id}"}
             (get-action-disable-url disable?)])
  (main/get-html [:div
                  [:div "Actor list"]
                  [:a {:class "btn btn-primary" :href "/admin/actor/insert"} "Add"]
                  (get-disable-link disable?)
                  (crud-list/get-html field-id
                                      urls
                                      (view-layout :fields)
                                      (if disable?
                                        (actor-dao/get-list-disable 0 50)
                                        (actor-dao/get-list 0 50))
                                      view-layout)
                  [:div {:class "option"}
                   [:select
                    [:option "Bulk action"]
                    [:option "Edit"]
                    [:option "Move to trash"]]
                   [:button {:class "btn"} "Apply"]]]))

;; (defn get-trash-html []
;;   (def urls [{:type "show" :name "show" :url "/admin/actor/show/{id}"}
;;              {:type "update" :name "update" :url "/admin/actor/update/{id}"}
;;              {:type "enable" :name "enable" :url "/admin/actor/enable/{id}"}])
;;   (main/get-html [:div
;;                   [:div "Actor list"]
;;                   [:a {:class "btn btn-primary" :href "/admin/actor/insert"} "Add"]
;;                   [:a {:class "btn" :href "/admin/actor/enable"} "Activate"]
;;                   (crud-list/get-html field-id
;;                                       urls
;;                                       (view-layout :fields)
;;                                       (actor-dao/get-list-disable 0 50)
;;                                       view-layout)
;;                   [:div {:class "option"}
;;                    [:select
;;                     [:option "Bulk action"]
;;                     [:option "Edit"]
;;                     [:option "Move to trash"]]
;;                    [:button {:class "btn"} "Apply"]]]))
