(ns glurps.admin.main
  (:require [glurps.config :as config]
            [hiccup.page :as page]
            [hiccup.core :as core]))

(def main-nav-rows [{:label "Home" :href "/admin"}
                    {:label "Actor" :href "/admin/actor"}
                    {:label "Users" :href "/admin/user"}
                    {:label "Glurps" :href "/glurps" :info "Glurps some data from Allocine"}                    
                    {:label "Database manager" :href (config/get :database-manager-url)}
                    {:label "logs" :href "/logs"}
                    {:label "Front" :href "/"}])

(defn- get-head []
  [:head
   [:title "Glurps! Administration"]
   ;; (page/include-css "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css")
   (page/include-css "https://fonts.googleapis.com/icon?family=Material+Icons")   
   (page/include-js "https://code.jquery.com/jquery-3.1.1.min.js")
   ;; (page/include-css "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js")
   ;; (page/include-css "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js")
   (page/include-js "/semantic/dist/semantic.min.js")
   (page/include-js "/js/main.js")
   (page/include-css "/semantic/dist/semantic.min.css")
   (page/include-css "/css/styles.css")])

(defn- get-main-nav-view [main-nav-rows]
  [:div {:class "ui large secondary inverted pointing menu"}
   [:a {:class "toc item"} "<i class='sidebar icon'></i>"]
   (map (fn [row]
          [:a {:class "item" :href (:href row)} (:label row)]) main-nav-rows)
   [:a {:class "active item"} "Home"]
   [:a {:class "item"} "Home"]])

(defn- get-main-nav-view-follow []
  [:div {:class "ui large top fixed hidden menu"}
   [:div {:class "ui container"}
    (map (fn [row]
           [:a {:class "item" :href (:href row)} (:label row)]) main-nav-rows)]
   [:div {:class "right menu"}
    [:div {:class "item"}
     [:a {:class "ui button"} "Log in"]]
    [:div {:class "item"}
     [:a {:class "ui primary button"} "Sign Up"]]]])

(defn- get-page-header []
  [:div
   ;; (get-main-nav-view-follow)
   [:div.ui {:class "ui inverted menu"}
    [:div {:class "header item"} "Glurps!"]
    [:div {:class "ui container"}
     (get-main-nav-view main-nav-rows)
     [:div {:class "right menu"}
      [:div {:class "item segment"}
       ;; [:div {:class "ui action left icon input"}
       ;;  [:i {:class "search icon"}]
       ;;  [:input {:placeholder ""} "Search"]
       ;;  [:button {:class "ui button"} "Submit"]]
       [:a {:class "ui inverted button"} "Log in"]
       [:a {:class "ui inverted button"} "Sign up"]]]]]])

(defn get-html [hiccup-html]
  (page/html5 (get-head)
              [:body
               [:div (get-page-header)]
               [:div {:class "ui container"} hiccup-html]]))