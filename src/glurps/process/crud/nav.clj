(ns glurps.process.crud.nav)

(defn get-disable-link [disable?]
  (if disable?
    [:a {:class "btn" :href "/admin/actor"} "List"]
    [:a {:class "btn" :href "/admin/actor/trash"} "Trash"]))

(defn get-html [disable?]
  [:div {:class "btn-list"}
   [:a {:class "btn btn-primary" :href "/admin/actor/insert"} "Add"]
   [:a {:class "btn" :href "/admin/actor/list/update"} "Filters"]
   [:a {:class "btn" :href "/admin/actor/list/update"} "Update"]
   (get-disable-link disable?)])