(ns glurps.admin.group.setting
  (:require [clojure.string :as str]
            [glurps.process.db.properties :as properties]
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
  {:path "/admin/group"
   :module-name "group"
   :db-class "Group"
   :field-id "_rid"
   :field-label "name"
   :field-image ""
   :search-field-title :name
   :search-field-descr :descr
   :search-field-image :image
   :option-thumb false
   :option-columns true
   :fields [{:name "_rid" :properties properties/string :type "integer" :list true :show true :insert false :update false :filter true}
            {:name "name" :properties properties/string :type "string" :filter false}
            ;; {:name "enable" :properties properties/boolean :type "boolean" :filter false :visible false}
            {:name "CreateDate" :properties properties/datetime :type "string" :filter true :insert false :update false}
            {:name "UpdateDate" :properties properties/datetime :type "string" :filter true :insert false :update false}]
   :default-params {:columns ["_rid" "name" "CreateDate" "UpdateDate"]
                    :order "id"
                    :asc "1"
                    :enable true
                    :page "1"
                    :limit "25"}
   :list-action-html-fn list-action-html-fn
   :row-action [{:name "show" :url "/admin/group/show/{{id}}" :label "show" :title "Info" :icon "info"}
                {:name "edit" :url "/admin/group/show/{{id}}" :label "show" :title "Info" :icon "info"}]})
