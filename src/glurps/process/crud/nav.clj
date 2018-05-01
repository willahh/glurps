(ns glurps.process.crud.nav)

(defn get-disable-link [disable?]
  (if disable?
    [:a {:class "item" :href "/admin/actor" :title "List"} [:i {:class "icon list"}]]
    [:a {:class "item" :href "/admin/actor/trash" :title "Trash"} [:i {:class "icon trash"}]]))

(defn get-html [disable?]
  [:div {:class "ui compact icon menu"}
   [:a {:class "item" :href "/admin/actor/insert" :title "Add"} [:i {:class "icon add"}]]
   [:a {:class "item" :href "/admin/actor/list/update" :title "Filter" :onclick "$('.modal').modal('show'); return false;"} [:i {:class "icon filter"}]]
   [:a {:class "item" :href "/admin/actor/list/update" :title "Edit"} [:i {:class "icon edit"}]]
   (get-disable-link disable?)])