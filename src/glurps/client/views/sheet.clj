(ns glurps.client.views.sheet
  (:require [glurps.admin.home]
            [glurps.client.views.main :as main]))

(defn get-item-view [row]
  [:div {:class "col-md-4 mb-4"}
   [:div {:class "card" :style "height: 100%"}
    [:img.card-img-top ]
    [:div.card-body
     [:h5.card-title (row :title)]
     [:div.card-text
      [:div (row :description)
       [:p.date (row :date)]
       [:p.director (row :director)]
       [:p.genre (row :genre)]]]
     [:a {:class "btn btn-primary"} "Go"]]]])

(defn get-view [row]
  [:div.row
   [:h1 (row :title)]
   [:div "Date de sortie" (row :date)]
   [:div "De" (row :director)]
   ;; [:div "Avec" (row :actors)]
   [:div "Genres" (row :genre)]
   [:div "Description" (row :description)]
   [:div "Note presse" ((row :note) :presse)]
   [:div "Note spectateur" ((row :note) :spectator)]])

(defn get-html [id]
  (let [row (first (glurps.admin.home/find-by-id id))]
    (main/get-html [:div (get-view row)])))


