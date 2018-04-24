(ns glurps.process.crud.list
  (:require [glurps.process.html.html :as html-helper]
            [glurps.process.field.field :as field]))

(defn get-action-disable-url [disable?]
  (if disable?
    {:type "enable" :name "<i class=\"material-icons\">undo</i>" :url "/admin/actor/enable/{id}"}
    {:type "disable" :name "<i class=\"material-icons\">clear</i>" :url "/admin/actor/disable/{id}"}))

(defn get-disable-link [disable?]
  (if disable?
    [:a {:class "btn" :href "/admin/actor"} "List"]
    [:a {:class "btn" :href "/admin/actor/trash"} "Trash"]))

(defn get-bulk-action-html []
  [:div {:class "option"}
   [:select
    [:option "Bulk action"]
    [:option "Edit"]
    [:option "Move to trash"]]
   [:button {:class "btn"} "Apply"]])

(defn get-pagination-offset [page limit count]
  "Get pagination offset from page number, limit and table rows count."
  (* (- page 1) limit))

(defn get-pagination [path offset limit total]
  [:div {:class "pagination" :style "text-align: center;"}
   [:a {:class "btn" :href (str path "/p" 1)} 1]
   [:span {:class "btn" } "..."]
   (for [i (range 0 limit)]
     (let [start (+ offset i)]
       [:a {:class "btn" :href (str path "/p" start)} start]))
   [:span {:class "btn" } "..."]
   [:a {:class "btn" :href (str path "/p" total)} total]])

(defn get-list-option-html [path offset limit total]
  [:div {:class "row"}
   [:div {:class "col-sm-6"} (get-bulk-action-html)]
   [:div {:class "col-sm-6"} (get-pagination path offset limit total)]])

(defn get-action-html [disable?]
  [{:type "show" :name "<i class=\"material-icons\">info</i>" :url "/admin/actor/show/{id}"}
   {:type "update" :name "<i class=\"material-icons\">mode_edit</i>" :url "/admin/actor/update/{id}"}
   {:type "up" :name "<i class=\"material-icons\">keyboard_arrow_up</i>" :url "/admin/actor/up/{id}"}
   {:type "down" :name "<i class=\"material-icons\">keyboard_arrow_down</i>" :url "/admin/actor/down/{id}"}
   {:type "duplicate" :name "<i class=\"material-icons\">content_copy</i>" :url "/admin/actor/duplicate/{id}"}
   {:type "fav" :name "<i class=\"material-icons\">favorite_border</i>" :url "/admin/actor/duplicate/{id}"}
   (get-action-disable-url disable?)])

(defn get-empty-result-html []
  [:div {:style "text-align: center;"}
   [:div {:style "display: inline-block; font-weight: bold; text-align: center; padding: 6px 12px; background: #fff;"} 
    [:div "No result"]    
    [:div "<i class=\"material-icons\" style=\"font-size: 114px;\">web</i>"]]])

(defn get-column-html [column]
  [:div {:class "col"} 
   [:span {:class "val"} column]])

(defn get-html [field-id urls columns records & list-conf]
  (if (= 0 (count records))
    (get-empty-result-html)
    [:table {:class "table listTable" :style "border: 1px solid #000"}
     [:thead
      [:tr
       [:th ""]
       (for [column columns]
         [:th (get-column-html column)])
       [:th "actions"]]]
     [:tbody
      (for [record records]          
        [:tr
         [:td "<input type=\"checkbox\">"]
         (for [column columns]
           [:td
            (field/get-field-html column record (first list-conf))
            ])
         [:td
          (html-helper/get-action-html field-id urls (record (keyword field-id)))
          ]])]]))
