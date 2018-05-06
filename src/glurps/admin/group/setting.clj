(ns glurps.admin.group.setting
  (:require [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(defn list-action-html-fn [module-name record]
  [:span
   [:a {:href (str "/admin/" module-name "/show/" (:id record)) :class "btn" :title "Info"} "<i class=\"material-icons\">info</i>"]
   [:a {:href (str "/admin/" module-name "/update/" (:id record)) :class "btn" :title "Edit"} "<i class=\"material-icons\">mode_edit</i>"]
   ;; [:a {:href (str "/admin/" module-name "/duplicate/" (:id record)) :class "btn" :title "Duplicate"} "<i class=\"material-icons\">content_copy</i>"]
   (if (= (:active record) 1)
     [:a {:href (str "/admin/" module-name "/disable/" (:id record)) :class "btn" :title "Disable"} "<i class=\"material-icons\">clear</i>"]
     [:span
      [:a {:href (str "/admin/" module-name "/enable/" (:id record)) :class "btn" :title "Enable"} "<i class=\"material-icons\">undo</i>"]
      [:a {:href (str "/admin/" module-name "/delete/" (:id record)) :class "btn" :title "Delete"} "<i class=\"material-icons\">delete</i>"]])])

(def list-conf
  {:path "/admin/group"
   :module-name "group"
   :field-id "id"
   :field-label "name"
   :field-image ""
   :fields [{:name "id" :type "integer" :list true :show false :insert false :update false :filter true}
            {:name "active" :type "integer" :show false}
            {:name "name" :type "string" :filter false}] 
   :filter-fields ["id" "name"]
   :default-params {:columns ["id" "name"]
                    :order "id"
                    :asc "1"
                    :page "1"
                    :limit "25"}
   :list-action-html-fn list-action-html-fn
   :row-action [{:name "show" :url "/admin/group/show/{{id}}" :label "show" :title "Info" :icon "info"}
                {:name "edit" :url "/admin/group/show/{{id}}" :label "show" :title "Info" :icon "info"}]})
