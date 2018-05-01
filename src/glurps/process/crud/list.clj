(ns glurps.process.crud.list
  (:require [glurps.process.html.html :as html-helper]
            [glurps.process.field.field :as field]))

(defn- get-url [url id]
  (clojure.string/replace url #"\{id\}" (str id)))

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
   [:a {:class "btn" :href (str path "?page=" 1)} 1]
   [:span {:class "btn" } "..."]
   (for [i (range 0 limit)]
     (let [start (+ offset i)]
       [:a {:class "btn" :href (str path "?page=" start)} start]))
   [:span {:class "btn" } "..."]
   [:a {:class "btn" :href (str path "?page=" total)} total]])

(defn get-list-option-html [path offset limit total]
  [:div {:class "row"}
   [:div {:class "col-sm-6"} (get-bulk-action-html)]
   [:div {:class "col-sm-6"} (get-pagination path offset limit total)]])

(defn get-action-html [module-name record & disable?]
  [:span
   [:a {:href (str "/admin/" module-name "/show/" (:id record)) :class "btn"} "<i class=\"material-icons\">info</i>"]
   [:a {:href (str "/admin/" module-name "/update/" (:id record)) :class "btn"} "<i class=\"material-icons\">mode_edit</i>"]
   ;; [:a {:href (str "/admin/" module-name "/up/" (:id record)) :class "btn"} "<i class=\"material-icons\">keyboard_arrow_up</i>"]
   ;; [:a {:href (str "/admin/" module-name "/down/" (:id record)) :class "btn"} "<i class=\"material-icons\">keyboard_arrow_down</i>"]
   [:a {:href (str "/admin/" module-name "/duplicate/" (:id record)) :class "btn"} "<i class=\"material-icons\">content_copy</i>"]
   (if (= (:fav record) 1)
     [:a {:href (str "/admin/" module-name "/unfav/" (:id record)) :class "btn"} "<i class=\"material-icons\">favorite</i>"]
     [:a {:href (str "/admin/" module-name "/fav/" (:id record)) :class "btn"} "<i class=\"material-icons\">favorite_border</i>"])
   (if (= (:active record) 1)
     [:a {:href (str "/admin/" module-name "/disable/" (:id record)) :class "btn"} "<i class=\"material-icons\">clear</i>"]
     [:a {:href (str "/admin/" module-name "/enable/" (:id record)) :class "btn"} "<i class=\"material-icons\">undo</i>"])])

(defn get-empty-result-html []
  [:div {:style "text-align: center;"}
   [:div {:style "display: inline-block; font-weight: bold; text-align: center; padding: 6px 12px; background: #fff;"} 
    [:div "No result"]    
    [:div "<i class=\"material-icons\" style=\"font-size: 114px;\">web</i>"]]])

(defn get-column-html [field field-order field-asc]
  (let [url (str "?order=" field 
                 (if (= field field-order)
                   (if (= field-asc 1) "&asc=0" "&asc=1")
                   "&asc=1"))]
    [:div {:class "col"}
     [:a {:style "white-space:nowrap; vertical-align: middle;" :href url}
      (when (= field field-order) 
        (if (= field-asc 1)
          [:span {:style "vertical-align: middle;"} "<i class='material-icons'>arrow_downward</i>"]
          [:span {:style "vertical-align: middle;"} "<i class='material-icons'>arrow_upward</i>"]))
      [:span {:class "val"}  field]]]))

(defn get-html [field-id columns records field-order field-asc & list-conf]
  (if (= 0 (count records))
    (get-empty-result-html)
    [:table {:class "ui celled striped table"}
     [:thead
      [:tr
       [:th [:input {:type "checkbox"}]]
       (for [column columns]
         [:th (get-column-html column field-order field-asc)])
       [:th "actions"]]]
     [:tbody
      (for [record records]          
        [:tr
         [:td [:input {:type "checkbox"}]]
         (for [column columns]
           [:td
            (field/get-field-html column record (first list-conf))])
         [:td
          (get-action-html (:module-name (first list-conf)) record)]])]]))

(defn breadcrumb-html []
  [:div {:class "ui large breadcrumb"}
   [:a.section "Home"]
   [:i {:class "right chevron icon divider"}]
   [:a.section "Actor"]
   [:i {:class "right chevron icon divider"}]
   [:a.section "List"]])