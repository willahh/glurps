(ns glurps.client.views.main
  (:require [hiccup.page :as page]
            [hiccup.core :as core]
            [glurps.admin.home]))

(defn get-head []
  [:head
   [:title "Glurps!"]
   (page/include-css "/lib/bootstrap-4.0.0-beta-dist/css/bootstrap.min.css")
   (page/include-js "/lib/jquery-3.2.1/jquery-3.2.1.min.js") 
   (page/include-js "/lib/popper/popper.min.js") 
   (page/include-js "/lib/bootstrap-4.0.0-beta-dist/js/bootstrap.min.js") 
   (page/include-css "/css/styles.css")])

(defn get-header []
  [:nav {:class "navbar navbar-expand-lg navbar-light bg-light"}
   [:a.navbar-brand {:href "#"}]
   [:button.navbar-toggler {:type "button" :data-toggle "collapse" :data-target "#navbarSupportedContent"}
    [:span.navbar-toggler-icon]]
   [:div#navbarSupportedContent {:class "collapse navbar-collapse"}
    [:ul {:class "navbar-nav mr-auto"}
     [:li {:class "nav-item active"}
      [:a.nav-link {:href "/"} "Home" [:span.sr-only "(current)"]]]
     [:li {:class "nav-item"}
      [:a.nav-link {:href "/add-location"} "Add location"]]
     [:li {:class "nav-item"}
      [:a {:class "nav-link" :href "/all-locations"} "All locations"]]
     ]
    [:form {:class "form-inline my-2 my-lg-0"}
     [:input {:class "form-control mr-sm-2" :type "text" :placeholder "Search"}]
     [:button {:class "btn btn-outline-succes my-2 my-sm-0" :type "submit"} "Submit"]]]])

(defn get-html [hiccup-html]
  (page/html5 (get-head)
              [:body (get-header) hiccup-html]))

(defn get-item-view [row]
  [:div [:h1 (row :title)]
   [:p.description (row :description)]
   [:p.date (row :date)]
   [:p.director (row :director)]
   [:p.genre (row :genre)]])

(defn get-item-list-view [rows]
  (map #(get-item-view %) rows))

(defn get-root-html []
  (get-html (get-item-list-view (glurps.admin.home/get-sorties-week-rows-debug))))


