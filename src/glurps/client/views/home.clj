(ns glurps.client.views.home
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
     [:a {:class "btn btn-primary" :href (str "/sheet/" (row :id))} "Go"]]]])

(defn get-item-list-view [rows]
  (map #(get-item-view %) rows))

(defn get-html []
  (main/get-html [:div.row
                  (get-item-list-view (glurps.admin.home/get-sorties-week-rows-debug))]))
