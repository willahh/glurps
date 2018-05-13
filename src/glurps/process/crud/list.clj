(ns glurps.process.crud.list
  (:require [clojure.string :as str]
            [glurps.admin.main :as main]
            [glurps.process.crud.nav :as crud-nav]
            [glurps.process.crud.filter :as crud-filter]
            [glurps.component.form.select :as select]
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
  [:div 
   (select/select-html "bulk" 1 [{:name "id" :value 1 :label "Action"}
                                 {:name "edit" :value 2 :label "Edit" :on-click "document.location.href='/admin/group/update/' + get_selected_id();"}
                                 {:name "trash" :value 3 :label "Trash"}
                                 {:name "add-multiple" :value 4 :label "Add multiple"}])])

(defn get-pagination-offset [page limit count]
  "Get pagination offset from page number, limit and table rows count."
  (* (- page 1) limit))

(defn pagination-html [path page offset limit total]
  (when (> total limit)
    (let [page-count (int (Math/ceil (float (/ total limit))))
          visible-count 3
          start-list (max 1 (min (int (- page-count 3)) (max 1 (- page 1))))
          end-list (max (+ visible-count 1) (min page-count (min (+ page (- visible-count 1)) (+ page page-count))))]
      [:div.ui.pagination.menu.tiny {:style "text-align: center;"}
       (when (> page (- visible-count 1)) 
         [:a {:class "item" :href (str path "?page=" 1)} 1])
       (when (> page visible-count)
         [:span {:class "item" } "..."])
       (for [i (range start-list end-list)]
         (let [curr i]
           [:a {:class (str "item" (when (= page curr) " active")) :href (str path "?page=" curr)} curr]))
       (when (< page (+ 1 (- page-count visible-count))) 
         [:span {:class "item" } "..."])
       [:a {:class (str "item" (when (= page end-list) " active")) :href (str path "?page=" page-count)} page-count]])))

(defn get-list-option-html [params path offset limit total]
  [:div.ui.grid.middle.aligned
   [:div.ui.form
    [:div.inline.fields
     [:span.field "Active filters"]
     [:a.ui.button.link.small "Order by : id"]
     ;; [:span.field 
     ;;  "id"
     ;;  ;; (select/select-html "order" (:order params) [{:name "id" :value (:order params) :label "Id"
     ;;  ;;                                               :selected (= "id" (str (:order params)))}
     ;;  ;;                                              {:name "name" :value (:order params) :label "Name"
     ;;  ;;                                               :selected (= "name" (str (:order params)))}])
     ;;  ]
     [:a.ui.button.link.small "Order: asc"]
     [:div.ui.inline.multiple.dropdown
      [:input
       {:name "filters", :type "hidden"}]
      [:span.text
       "Filter Posts"]
      [:div.menu
       [:div.ui.icon.search.input
        [:i.search.icon]
        [:input
         {:placeholder "Search tags...", :type "text"}]]
       [:div.divider]
       [:div.header
        [:i.tags.icon]
        "\n      Tag Label\n    "]
       [:div.scrolling.menu
        [:div.item
         {:data-value "important"}
         [:div.ui.red.empty.circular.label]
         "\n        Important\n      "]
        [:div.item
         {:data-value "announcement"}
         [:div.ui.blue.empty.circular.label]
         "\n        Announcement\n      "]
        [:div.item
         {:data-value "cannotfix"}
         [:div.ui.black.empty.circular.label]
         "\n        Cannot Fix\n      "]
        [:div.item
         {:data-value "news"}
         [:div.ui.purple.empty.circular.label]
         "\n        News\n      "]
        [:div.item
         {:data-value "enhancement"}
         [:div.ui.orange.empty.circular.label]
         "\n        Enhancement\n      "]
        [:div.item
         {:data-value "off-topic"}
         [:div.ui.yellow.empty.circular.label]
         "\n        Off Topic\n      "]
        [:div.item
         {:data-value "interesting"}
         [:div.ui.pink.empty.circular.label]
         "\n        Interesting\n      "]
        [:div.item
         {:data-value "discussion"}
         [:div.ui.green.empty.circular.label]
         "\n        Discussion\n      "]]]]
     ;; [:span.field 
     ;;  "Asc"
     ;;  ;; (select/select-html "asc" (:asc params) [{:name "1" :value (:asc params) :label "Asc"
     ;;  ;;                                           :selected (= "1" (str (:asc params)))}
     ;;  ;;                                          {:name "0" :value (:asc params) :label "Desc"
     ;;  ;;                                           :selected (= "0" (str (:asc params)))}])
     ;;  ]
     ]]])

(defn get-action-html [field-id module-name record]
  (let [id ((keyword (str/replace field-id "#" "")) record)]
    [:span
     [:a {:href (str "/admin/" module-name "/show/" id) :class "btn" :title "Info"} "<i class=\"material-icons\">info</i>"]
     [:a {:href (str "/admin/" module-name "/update/" id) :class "btn" :title "Edit"} "<i class=\"material-icons\">mode_edit</i>"]
     [:a {:href (str "/admin/" module-name "/duplicate/" id) :class "btn" :title "Duplicate"} "<i class=\"material-icons\">content_copy</i>"]
     (if (= (:fav record) 1)
       [:a {:href (str "/admin/" module-name "/unfav/" id) :class "btn" :title "Remove to favorite"} "<i class=\"material-icons\">favorite</i>"]
       [:a {:href (str "/admin/" module-name "/fav/" id) :class "btn" :title "Add to favorite"} "<i class=\"material-icons\">favorite_border</i>"])
     (if-not (:enable record)
       [:a {:href (str "/admin/" module-name "/disable/" id) :class "btn" :title "Disable"} "<i class=\"material-icons\">clear</i>"]
       [:span
        [:a {:href (str "/admin/" module-name "/enable/" id) :class "btn" :title "Restore"} "<i class=\"material-icons\">undo</i>"]
        [:a {:href (str "/admin/" module-name "/delete/" id) :class "btn" :title "Delete"} "<i class=\"material-icons\">delete</i>"]])]))

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

(defn get-html [fields records field-order field-asc list-conf module-name list-action-html-fn]
  (if (= 0 (count records))
    (get-empty-result-html)
    [:table.ui.celled.striped.table.list-table
     [:thead
      [:tr
       [:th [:input {:type "checkbox"}]]
       (for [field fields]
         [:th (get-column-html field field-order field-asc)])
       [:th "actions"]]]
     [:tbody
      (for [record records]
        [:tr
         [:td [:input {:type "checkbox" :value (:_rid record)}]]
         (for [field fields]
           [:td
            (field/get-field-html field record fields true)])
         [:td
          (when list-action-html-fn
            (list-action-html-fn (:field-id list-conf) module-name record))]])]]))

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

(defn service-worker-html []
  [:div [:div
         "\n  Service Worker Status: "
         [:span#status
          "not supported"]]
   "\n\nOpen "
   [:a
    {:href "./index.html", :target "_blank"}
    "another window with this page"]
   " and type some text in below to postMessage it to the ServiceWorker which will forward the message along.\n\n"
   [:div#received]
   [:textarea#message
    {:style "width: 100%", :rows "10"}]])

(defn get-html-wrapper [session params state list-conf count get-list disable-count]
  (let [field-id (:field-id list-conf)
        path (:path list-conf)
        columns (map-fields-to-column (:fields list-conf))
        list-action-html-fn (if (:list-action-html-fn list-conf)
                              (:list-action-html-fn list-conf)
                              get-action-html)
        visible-columns (get-visible-columns (map #(:name %) (:fields list-conf))
                                             (:columns state)
                                             (:columns (:default-params list-conf)))
        page (Integer. (:page state))
        enable (:enable state)
        limit (Integer. (:limit state))
        field-order (:order state)
        field-asc (Integer. (:asc state))
        offset (get-pagination-offset page limit count)
        records (get-list state offset limit)]
    [:div.ui.stackable.grid
     [:div.row.column.two {:style "padding-top: 0;"}
      [:div {:class "four wide column"}
       [:h2 {:style "margin-bottom: 0.2em;"} 
        (crud-filter/get-html columns state)
        (main/get-page-title list-conf main/module-type-list records)]
       [:span.item
        [:div.ui.olive.horizontal.label count] "Results"]]
      [:div {:class "twelve wide column right aligned"}
       (crud-nav/get-html list-conf enable disable-count)]]
     [:div {:class "row"}
      [:div {:class "column"}
       (get-list-option-html state (:path list-conf) offset limit count)]]
     [:div.row
      [:div.column
       [:div.ui.grid
        (get-bulk-action-html)
        (pagination-html (:path list-conf) page offset limit count)
        [:form {:class "left floated" :method "get" :action ""}
         [:input {:type "hidden" :name "page" :value 1}]
         (select/select-html "limit" (:limit state)
                             (for [i ["2" "5" "10" "25" "50" "100" "250" "500"]]
                               {:name i 
                                :value (:limit state) :label i}))
         "Per page"
         [:button {:class "ui button"} "ok"]]]]]
     [:div.row
      [:div.column
       (get-html (columns-to-fields visible-columns (:fields list-conf))
                 records
                 field-order
                 field-asc
                 list-conf
                 (:module-name list-conf)
                 list-action-html-fn)]]
     [:div.row [:div.column
                [:div (str "params: " (pr-str params))]
                [:div (str "default params: " (:default-params list-conf))]
                [:div (str "session: " session)]
                [:div (str "state:: " state)]
                ;; (service-worker-html)
                ]]]))
