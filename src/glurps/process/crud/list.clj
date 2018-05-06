(ns glurps.process.crud.list
  (:require [glurps.admin.main :as main]
            [glurps.process.crud.nav :as crud-nav]
            [glurps.process.crud.filter :as crud-filter]
            [glurps.process.html.html :as html-helper]
            [glurps.process.field.field :as field]
            [glurps.component.card.card :as card]
            [glurps.admin.user.setting :as user-setting]))

(defn in? 
  "True if coll contains elm."
  [coll elm]  
  (some #(= elm %) coll))

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

(defn get-action-html [module-name record]
  [:span
   [:a {:href (str "/admin/" module-name "/show/" (:id record)) :class "btn" :title "Info"} "<i class=\"material-icons\">info</i>"]
   [:a {:href (str "/admin/" module-name "/update/" (:id record)) :class "btn" :title "Edit"} "<i class=\"material-icons\">mode_edit</i>"]
   [:a {:href (str "/admin/" module-name "/duplicate/" (:id record)) :class "btn" :title "Duplicate"} "<i class=\"material-icons\">content_copy</i>"]
   (if (= (:fav record) 1)
     [:a {:href (str "/admin/" module-name "/unfav/" (:id record)) :class "btn" :title "Remove to favorite"} "<i class=\"material-icons\">favorite</i>"]
     [:a {:href (str "/admin/" module-name "/fav/" (:id record)) :class "btn" :title "Add to favorite"} "<i class=\"material-icons\">favorite_border</i>"])
   (if (= (:active record) 1)
     [:a {:href (str "/admin/" module-name "/disable/" (:id record)) :class "btn" :title "Disable"} "<i class=\"material-icons\">clear</i>"]
     [:span
      [:a {:href (str "/admin/" module-name "/enable/" (:id record)) :class "btn" :title "Enable"} "<i class=\"material-icons\">undo</i>"]
      [:a {:href (str "/admin/" module-name "/delete/" (:id record)) :class "btn" :title "Delete"} "<i class=\"material-icons\">delete</i>"]])])

(defn get-empty-result-html []
  [:div {:style "text-align: center;"}
   [:div {:style "display: inline-block; font-weight: bold; text-align: center; padding: 6px 12px; background: #fff;"} 
    [:div "No result"]    
    [:div "<i class=\"material-icons\" style=\"font-size: 114px;\">web</i>"]]])

(defn get-column-html [field field-order field-asc]
  (let [field-name (:name field)
        url (str "?order=" field-name 
                 (if (= field-name field-order)
                   (if (= field-asc 1) "&asc=0" "&asc=1")
                   "&asc=1"))]
    [:div {:class "col"}
     [:a {:style "white-space:nowrap; vertical-align: middle;" :href url}
      (when (= field-name field-order) 
        (if (= field-asc 1)
          [:span {:style "vertical-align: middle;"} "<i class='material-icons'>arrow_downward</i>"]
          [:span {:style "vertical-align: middle;"} "<i class='material-icons'>arrow_upward</i>"]))
      [:span {:class "val"} field-name]]]))


;; (def records [{:email "wravel@gmail.com",:date_update "",:first_name "William",:password "maybethisshouldbecrypted",:login "wravel",:group_id 1,:active 1,:id 1,:last_name "Ravel",:user_id 1,:date_create "ah",:id_2 1} [:email "john@yo.com",:date_update "",:first_name "John",:password "",:login "john",:group_id 1,:active 1,:id 2,:last_name "Doe",:user_id 2,:date_create "",:id_2 2]]) 
;; (def fields [{:email "aaa" :type "string"}])

;; (map (fn [record]
;;        {:a "a"}) records)

(defn get-html [fields records field-order field-asc list-conf module-name list-action-html-fn]
  (if (= 0 (count records))
    (get-empty-result-html)
    [:table {:class "ui celled striped table"}
     [:thead
      [:tr
       [:th [:input {:type "checkbox"}]]
       (for [field fields]
         [:th (get-column-html field field-order field-asc)])
       [:th "actions"]]]
     [:tbody
      (for [record records]
        [:tr
         [:td [:input {:type "checkbox"}]]
         (for [field fields]
           [:td
            (field/get-field-html field record fields true)])
         [:td
          (when list-action-html-fn
            (list-action-html-fn module-name record))]])]]))

(defn get-html-thumb [field-id columns records field-order field-asc list-conf]
  (if (= 0 (count records))
    (get-empty-result-html)
    
    (let [card-records (map (fn [record]
                              {:image (:picture record)
                               :title (:name record)
                               :meta (:age record)}) records)]
      (card/cards-html card-records))))

(defn- map-fields-to-column [fields]
  (into [] (map #(:name %) fields)))

(defn get-visible-columns [columns visible-columns visible-columns-default]
  (let [cols (filter (fn [field]
                       (in? visible-columns (:name field))) columns)]
    (if (zero? (count cols)) 
      visible-columns-default
      cols)))

(defn columns-to-fields [columns fields]
  (filter (fn [field]
            (in? columns (:name field))) fields))

(defn get-html-wrapper [session params list-conf disable? count get-list get-list-disable]
  (let [field-id (:field-id list-conf)
        path (:path list-conf)
        columns (map-fields-to-column (:fields list-conf))
        list-action-html-fn (if (:list-action-html-fn list-conf)
                              (:list-action-html-fn list-conf)
                              get-action-html)
        visible-columns (get-visible-columns (map #(:name %) (:fields list-conf))
                                             (:columns params)
                                             (:columns (:default-params list-conf)))
        page (if (:page params) 
               (Integer. (:page params))
               (Integer. (:page (:default-params list-conf))))
        limit (if (:limit params) 
                (Integer. (:limit params))
                (Integer. (:limit (:default-params list-conf))))
        field-order (if (:order params)
                      (:order params) field-id)
        field-asc (if (:asc params)
                    (Integer. (:asc params)) true)
        offset (get-pagination-offset page limit count)
        records (if disable?
                  (get-list-disable params offset limit)
                  (get-list (merge {:active 1} params) offset limit))]
    (main/get-html
     [:div 
      [:div session]
      [:h2 (:title list-conf)]
      [:div 
       [:div (str "debug params:" (pr-str params))]
       [:div (str "debug session:" session)]
       ]
      [:div 
       (crud-nav/get-html list-conf disable?)
       (crud-filter/get-html columns
                             (merge (:default-params list-conf) params))
       ;; (crud-list/get-list-option-html path offset limit count)
       (get-html (columns-to-fields visible-columns (:fields list-conf))
                 records
                 field-order
                 field-asc
                 list-conf
                 (:module-name list-conf)
                 list-action-html-fn)
       ;; (crud-list/get-list-option-html path offset limit count)
       ]])))
