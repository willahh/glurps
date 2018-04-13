(ns glurps.client.views.week
  (:require [glurps.config :as config]
            [glurps.client.views.main :as main]
            [glurps.model.actor :as model-actor]
            [glurps.process.image :as image]))

(defn get-actor-image [actor-record]
  "Returne the image filepath to the actor. Create the image if it doesn't
  exist"
  (let [filepath (str (image/get-dir) "actor_" (actor-record :id) ".jpg")]
    (when-not (.exists (clojure.java.io/as-file filepath))
      (image/extract-image-from-url (actor-record :picture) (str "actor_" (actor-record :id) ".jpg")))
    (str (config/get :root-path) filepath)))

(defn get-actor-html [actor-record]
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

(defn get-actor-list-html [actor-record-list]
  [:div.row (for [actor-record actor-record-list]
              (get-actor-html actor-record))])

(defn get-html []
  (main/get-html [:div.row
                  [:div
                   [:h2 "Week"]
                   (get-actor-list-html (model-actor/get-list 2 2))
                   ]]))