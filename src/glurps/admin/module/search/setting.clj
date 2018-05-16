(ns glurps.admin.module.search.setting
  (:require [clojure.string :as str]
            [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(defn list-action-html-fn [field-id module-name record]
  (let [id (str/replace ((keyword field-id) record) "#" "")]
    [:span
     [:a {:href (str "/admin/" module-name "/show/" id) :class "btn" :title "Info"} "<i class=\"material-icons\">info</i>"]
     [:a {:href (str "/admin/" module-name "/update/" id) :class "btn" :title "Edit"} "<i class=\"material-icons\">mode_edit</i>"]
     (if (:fav record)
       [:a {:href (str "/admin/" module-name "/unfav/" id) :class "btn" :title "Remove to favorite"} "<i class=\"material-icons\">favorite</i>"]
       [:a {:href (str "/admin/" module-name "/fav/" id) :class "btn" :title "Add to favorite"} "<i class=\"material-icons\">favorite_border</i>"])
     (if (:enable record)
       [:a {:href (str "/admin/" module-name "/disable/" id) :class "btn" :title "Disable"} "<i class=\"material-icons\">clear</i>"]
       [:span
        [:a {:href (str "/admin/" module-name "/enable/" id) :class "btn" :title "Restore"} "<i class=\"material-icons\">undo</i>"]
        [:a {:href (str "/admin/" module-name "/delete/" id) :class "btn" :title "Delete"} "<i class=\"material-icons\">delete</i>"]])]))

(def list-conf
  {:path "/admin/search"
   :module-name "search"
   :db-class "Group"
   :field-id "_rid"
   :field-label "name"
   :field-image ""
   :fields [{:name "_rid" :type "integer" :list true :show true :insert false :update false :filter true}
            {:name "name" :type "string" :filter false}]
   :filter-fields ["id" "name"]
   :default-params {:columns ["_rid" "name"]
                    :order "id"
                    :asc "1"
                    :disable false
                    :page "1"
                    :limit "2"}
   :list-action-html-fn list-action-html-fn
   :row-action [{:name "show" :url "/admin/search/show/{{id}}" :label "show" :title "Info" :icon "info"}
                {:name "edit" :url "/admin/search/show/{{id}}" :label "show" :title "Info" :icon "info"}]})
