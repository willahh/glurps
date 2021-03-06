(ns glurps.client.module.actor.actor-view
  (:require [glurps.config :as config]
            [glurps.process.field.image :as field-image]))

(defn get-item-html [actor-record]
  [:div {:class "col-md-6 mb-6"}
   [:div {:class "card" :style "height: 100%"}
    [:img.card-img-top ]
    [:div.card-body
     [:h5.card-title (actor-record :name)]
     [:div.card-text
      [:div.name {:class "name"} (actor-record :name)]

      (let [image-name (str "actor_" (actor-record :id) ".jpg")
            url (actor-record :picture)]
        (field-image/get-html actor-record))
      
      ;; [:div (row :description)
      ;;  [:p.date (row :date)]
      ;;  [:p.director (row :director)]
      ;;  [:p.genre (row :genre)]]
      ]]]])

(defn get-list-html [actor-record-list]
  [:div.row (for [actor-record actor-record-list]
              (get-item-html actor-record))])
