(ns glurps.admin.main 
  (:require [ring.util.response :as response]
            [glurps.config :as config]
            [glurps.component.tree.tree :as tree]
            [hiccup.page :as page]
            [hiccup.core :as core]))

(def module-type-list "list")
(def module-type-show "show")
(def module-type-edit "edit")

(def main-nav-rows [{:label "Home" :href "/admin"}
                    {:label "Groups" :href "/admin/group"}
                    {:label "DB Manager" :href (config/getconf :database-manager-url)}
                    {:label "logs" :href "/logs"}
                    {:label "Front" :href "/"}])

(defn- get-head []
  [:head
   [:title "Glurps! Administration"]
   [:link {:type "text/css", :href "/lib/material_icon.css" :rel "stylesheet"}]
   [:script {:type "text/javascript", :src "/lib/jquery-3.1.1.min.js"}]
   [:script {:type "text/javascript", :src "/semantic/dist/semantic.min.js"}]
   [:script {:type "text/javascript", :src "/js/main.js"}]
   [:script {:type "text/javascript", :src "/js/list.js"}]
   [:script {:type "text/javascript", :src "/js/sw.js"}]
   [:link {:type "text/css", :href "/semantic/dist/semantic.min.css" :rel "stylesheet"}]
   [:link {:type "text/css", :href "/css/main.css" :rel "stylesheet"}]])

(defn- get-main-nav-view [main-nav-rows]
  [:div {:class "ui large secondary inverted pointing menu"}
   [:a {:class "toc item"} "<i class='sidebar icon'></i>"]
   (map (fn [row]
          [:a {:class "item" :href (:href row)} (:label row)]) main-nav-rows)])

(defn login-html []
  [:div.row {:style "margin-top: 30px;"}
   [:h1 "Glurps"]
   [:form.ui.form {:action "/admin/login" :method "POST"}
    [:div.fields
     [:div.field.six.wide
      [:label "Login"]
      [:input {:name "login", :placeholder "Login", :type "text"}]]
     [:div.field.six.wide
      [:label "Password"]
      [:input {:name "password", :placeholder "Password", :type "password"}]]
     [:button.ui.button
      {:type "submit"} "Login"]]]])

(defn search-html [& value]
  (let [value (first value)]
    [:form {:action "/admin/search" :method "get"}
     [:div.ui.fluid.category.search
      [:div.ui.icon.input
       [:input.prompt (conj {:placeholder "Search ...", :type "text" :name "q"}
                            (when value {:value value}))]
       [:i.search.icon]]
      [:div.results]]]))

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

(defn- user-html []
  [:div.item
   [:div.ui.dropdown {:style "z-index: 200;"}
    [:div.item
     [:img.ui.mini.circular.image
      {:src "https://semantic-ui.com/images/avatar2/small/molly.png"}]
     [:div.content "Floriane"]]
    [:div.menu
     [:a.item {:href "/admin/account"} [:i.attention.icon] "My account"]
     [:a.item {:href "/admin/logout"} [:i.comment.icon] "Logout"]]]])

(defn- get-page-header []
  [:div
   [:div.ui {:class "ui inverted menu header-main"}
    [:div {:class "header"} "Glurps!"]
    [:div {:class "ui container"}
     (get-main-nav-view main-nav-rows)
     [:div {:class "right menu"}
      [:div {:class "item"} (search-html)]
      (user-html)]]]])

(defn breadcrumb-html []
  [:div {:class "ui large breadcrumb"}
   [:a.section "Home"]
   [:i {:class "right chevron icon divider"}]
   [:a.section "Actor"]
   [:i {:class "right chevron icon divider"}]
   [:a.section "List"]])

(defn main-tree-html []
  (tree/html))

(defn get-page-title [module-conf module-type & records]
  (let [module-name (clojure.string/capitalize (:module-name module-conf))
        record (if (and records (first records)) (first (first (first records))))
        title (case module-type
                "list" (str module-name " list")
                "show" (str module-name " show"
                            (when record (str " - " ((keyword (:field-label module-conf)) record))))
                "edit" (str module-name " edit"
                            (when record (str " - " ((keyword (:field-label module-conf)) record)))))]
    title))

(defn admin-page-html-login-wrapper [session params html]
  "Html wrapper for all admin pages."
  (page/html5 (get-head)
              [:body
               [:div {:class "ui container"}
                html]]))

(defn admin-page-html-wrapper [session params html]
  "Html wrapper for all admin pages."
  (if (:logged session)
    (page/html5 
     (get-head)
     [:body
      [:div (get-page-header)]
      [:div {:class "ui container"}
       [:div.ui.stackable.grid
        [:div.row {:style "padding-bottom: 0;"}
         [:div.column (breadcrumb-html)]]]
       html]])
    (page/html5 
     (get-head)
     [:body
      [:div {:class "ui container"}
       (login-html)]])))
