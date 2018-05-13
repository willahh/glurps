(ns glurps.process.crud.nav)

(defn get-disable-link [list-conf enable disable-count]
  (if enable
    [:span {:class "item"}
     [:a { :href (str (:path list-conf) "/trash") :title "Trash"} [:i {:class "icon trash"}]]
     (when (> disable-count 0)
       [:span {:class "floating ui red label"} disable-count])]
    [:a {:class "item" :href (:path list-conf) :title "List"} [:i {:class "icon list"}]]))

(defn get-html [list-conf enable disable-count]
  [:span {:class "ui compact icon menu"}
   ;; [:a {:class "item" :href (str (:path list-conf) "/insert") :title "Add"} [:i {:class "icon add"}]]
   [:div.ui.teal.buttons
    [:a.ui.button {:href (str (:path list-conf) "/insert") :title "Add"} "Add"  [:i {:class "icon add"}]]
    [:div.ui.floating.dropdown.icon.button
     [:i.dropdown.icon]
     [:div.menu
      [:a.item {:href (str (:path list-conf) "/insert?count=2")} [:i.edit.icon] "Add 2"]
      [:a.item {:href (str (:path list-conf) "/insert?count=5")} [:i.edit.icon] "Add 5"]
      [:a.item {:href (str (:path list-conf) "/insert?count=10")} [:i.edit.icon] "Add 10"]]]]
   [:span {:class "item"}
    [:a {:href (str (:path list-conf) "/list/update") :title "Filter" :onclick "$('.modal').modal('show'); return false;"} [:i {:class "icon filter"}]]
    [:span {:class "floating ui teal label"} 22]]   
   (get-disable-link list-conf enable disable-count)
   (when (:option-columns list-conf)
     [:a {:class "item" :title "Columns"} [:i {:class "icon cog"}]])
   (when (:option-thumb list-conf)
     [:span {:class "item" :style "padding-top: 0; padding-bottom: 0; padding-right: 0.6em;"}
      [:span {:class "ui icon buttons"}
       [:a {:class "ui button  mini left attached" :href "?display=list" :title "List"} [:i {:class "icon list"}]]
       [:a {:class "ui button  basic mini right attached " :href "?display=thumb" :title "Thumb"} [:i {:class "icon th"}]]]])])
