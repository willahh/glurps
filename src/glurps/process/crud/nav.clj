(ns glurps.process.crud.nav)

(defn get-disable-link [list-conf disable?]
  (if disable?
    [:a {:class "item" :href (:path list-conf) :title "List"} [:i {:class "icon list"}]]
    [:a {:class "item" :href (str (:path list-conf) "/trash") :title "Trash"} [:i {:class "icon trash"}]]))

(defn get-html [list-conf disable?]
  [:div {:class "ui grid"}
   [:div {:class "aligned two column row"}
    [:span {:class "ui column"}
     [:span {:class "ui compact icon menu"}
      [:a {:class "item" :href (str (:path list-conf) "/insert") :title "Add"} [:i {:class "icon add"}]]
      [:a {:class "item" :href (str (:path list-conf) "/list/update") :title "Filter" :onclick "$('.modal').modal('show'); return false;"} [:i {:class "icon filter"}]]
      [:a {:class "item" :href (str (:path list-conf) "/list/update") :title "Edit"} [:i {:class "icon edit"}]]
      (get-disable-link list-conf disable?)]]
    [:span {:class "ui column"}
     [:span {:class "buttons"}
      [:a {:class "ui button blue" :href "?display=list" :title "List"} [:i {:class "icon list"}]]
      [:a {:class "ui button primary basic" :href "?display=thumb" :title "Thumb"} [:i {:class "icon th"}]]]]]])
