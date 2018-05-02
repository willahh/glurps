(ns glurps.admin.main
  (:require [glurps.config :as config]
            [hiccup.page :as page]
            [hiccup.core :as core]))

(def module-type-list "list")
(def module-type-show "show")
(def module-type-edit "edit")

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
          [:a {:class "item" :href (:href row)} (:label row)]) main-nav-rows)])

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

(defn breadcrumb-html []
  [:div {:class "ui large breadcrumb"}
   [:a.section "Home"]
   [:i {:class "right chevron icon divider"}]
   [:a.section "Actor"]
   [:i {:class "right chevron icon divider"}]
   [:a.section "List"]])

(defn get-html [hiccup-html]
  (page/html5 (get-head)
              [:body
               [:div (get-page-header)]
               [:div {:class "ui container"} hiccup-html]]))

(defn get-page-title [module-conf module-type & records]
  (let [module-name (clojure.string/capitalize (:module-name module-conf))
        record (if (and records (first records)) (first (first (first records))))
        title (case module-type
                "list" (str module-name " list")
                "show" (str module-name " show"
                            (when record (str " - " ((keyword (:field-label module-conf)) record))))
                "edit" (str module-name " edit"
                            (when record (str " - " ((keyword (:field-label module-conf)) record)))))]
    [:h2 title]))

(defn admin-page-html-wrapper [module-conf module-type html & records]
  "Html wrapper for all admin pages."
  (page/html5 (get-head)
              [:body
               [:div (get-page-header)]
               [:div {:class "ui container"}
                (breadcrumb-html)
                (get-page-title module-conf module-type records)
                html]]))
