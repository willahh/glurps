(ns glurps.module.actor.actor-view
  (:require [glurps.config :as config]
            [glurps.model.actor :as model-actor]
            [glurps.process.image :as image]))

(defn- get-actor-image [actor-record]
  "Returne the image filepath of the actor. Create the image if it doesn't
  exist"
  (let [filepath (str (image/get-dir) "actor_" (actor-record :id) ".jpg")]
    (when-not (.exists (clojure.java.io/as-file filepath))
      (image/extract-image-from-url (actor-record :picture) (str "actor_" (actor-record :id) ".jpg")))
    (str (config/get :root-path) filepath)))

(defn get-item-html [actor-record]
  [:div {:class "col-md-6 mb-6"}
   [:div {:class "card" :style "height: 100%"}
    [:img.card-img-top ]
    [:div.card-body
     [:h5.card-title (actor-record :name)]
     [:div.card-text
      [:div.name {:class "name"} (actor-record :name)]
      [:img {:src (get-actor-image actor-record) :style "max-width: 100px; max-height: 100px;"}]
      ;; [:div (row :description)
      ;;  [:p.date (row :date)]
      ;;  [:p.director (row :director)]
      ;;  [:p.genre (row :genre)]]
      ]]]])

(defn get-list-html [actor-record-list]
  [:div.row (for [actor-record actor-record-list]
              (get-item-html actor-record))])
