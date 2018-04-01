(ns glurps.client.views.main
  (:require [hiccup.page :as page]
            [hiccup.core :as core]
            [glurps.admin.home]))

(def main-nav-rows [{:label "Home" :href "/"}
                    {:label "Week" :href "/week"}])

(defn get-head []
  [:head
   [:title "Glurps!"]
   (page/include-css "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css")
   (page/include-css "https://code.jquery.com/jquery-3.2.1.slim.min.js")
   (page/include-css "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js")
   (page/include-css "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js")
   (page/include-css "/css/styles.css")])

(defn get-main-nav-view [main-nav-rows]
  [:ul {:class "navbar-nav mr-auto"}
   (map (fn [row]
          [:li {:class "nav-item active"}
           [:a.nav-link {:href (row :href)} (row :label)]]) main-nav-rows)])

(defn get-page-header []
  [:nav {:class "navbar navbar-expand-lg navbar-light bg-light"}
   [:a.navbar-brand {:href "#"}]
   [:button.navbar-toggler {:type "button" :data-toggle "collapse" :data-target "#navbarSupportedContent"}
    [:span.navbar-toggler-icon]]
   [:div#navbarSupportedContent {:class "collapse navbar-collapse"}
    (get-main-nav-view main-nav-rows)
    [:form {:class "form-inline my-2 my-lg-0"}
     [:input {:class "form-control mr-sm-2" :type "text" :placeholder "Search"}]
     [:button {:class "btn btn-outline-succes my-2 my-sm-0" :type "submit"} "Submit"]]]])

(defn get-html [hiccup-html]
  (page/html5 (get-head)
              [:body {:class "bg-light"}
               [:div.container (get-page-header) hiccup-html]]))
