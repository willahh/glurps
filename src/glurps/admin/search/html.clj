(ns glurps.admin.search.html
  (:require [glurps.admin.search.setting :as setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.search.search-dao :as search-dao]))

[{:email "wravel@gmail.com", :first_name "William", :_rid "#26:0", :update_date nil, :password "pwd", :name "nametest", :create_date #inst "2018-05-14T22:05:00.000-00:00", :login "wravel", :_class "User", :last_name "Ravel", :_version 2}]

(defn list-html [session params]
  (main/admin-page-html-wrapper
   session
   params
   (let [records (search-dao/get-list {:query (:q params)} 0 100)
         count (count records)]
     [:div
      [:div (pr-str params)]
      [:div (pr-str (take 5 records))]
      [:h2.ui.header
       [:i.search.circular.icon]
       [:div.content
        [:span.item {:style "position: relative;"}
         [:span {:class "floating ui teal label"} count]
         [:span "Results"]]
        
        [:div.sub.header
         
         (str "Query: " (:q params))]]]
      [:div (main/search-html (:q params))]
      [:div.ui.divided.items
       (for [record records]
         [:div.item
          [:div.image {:style "width: 79px;"}
           [:img
            {:src "/images/wireframe/image.png"}]]
          [:div.content
           [:div [:a {:href "/admin/group"} "/admin/group"]]
           [:a.header
            (str (:_rid record) " " (:name record))]
           [:span.meta
            [:span {:class "date"} "2 days ago"]]
           [:div.meta
            [:span (:_class record)]]
           [:div.description
            [:p "qfdsfdsf"]]
           [:div.extra
            [:div.ui.label "Tag a"]
            [:div.ui.label "Tag b"]
            (when (:fav record)
              [:span
               [:i.heart.outline.like.icon.red {:title "William, Floriane like this"}]
               "17 likes"])
            (when-not (:enable record) [:i {:class "icon trash"}])
            ]]])]])))
