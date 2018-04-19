(ns glurps.client.module.movie.movie-view)

(defn get-item-html [movie-record]
  [:div {:class "col-md-4 mb-4"}
   [:div {:class "card" :style "height: 100%"}
    [:img.card-img-top ]
    [:div.card-body
     [:h5.card-title (movie-record :title)]
     [:div.card-text
      [:div (movie-record :description)
       [:p.date (movie-record :date)]
       [:p.director (movie-record :director)]
       [:p.genre (movie-record :genre)]]]
     [:a {:class "btn btn-primary" :href (str "/sheet/" (movie-record :id))} "Go"]]]])