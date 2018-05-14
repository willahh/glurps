(ns glurps.admin.user.html
  (:require [clojure.string :as str]
            [glurps.admin.user.setting :as setting]
            [glurps.admin.user.setting :as user-setting]
            [glurps.admin.group.setting :as group-setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.process.crud.update :as crud-update]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.user.user-dao :as user-dao]
            [glurps.model.group.group-dao :as group-dao]))

(defn list-action-html-fn [field-id module-name record]
  (let [id (clojure.string/replace ((keyword field-id) record) "#" "")]
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

(defn list-html 
  [session params state]
  (main/admin-page-html-wrapper 
   session
   params
   (crud-list/get-html-wrapper session
                               params
                               state
                               setting/list-conf
                               (user-dao/enable-count)
                               user-dao/get-list
                               (user-dao/disable-count)
                               list-action-html-fn)))

(defn show-html 
  [session params state]
  (let [id (:id params)
        record (user-dao/find-by-id id)
        fields (:fields setting/list-conf)]
    (main/admin-page-html-wrapper
     session
     params
     [:div
      (crud-show/get-html fields record)
      [:div 
       [:h2 "Gruoups"]
       (let [records (user-dao/find-group-from-user-id id)]         
         (crud-list/get-html (:fields group-setting/list-conf)
                             records
                             "name"
                             1
                             setting/list-conf
                             "group"
                             list-action-html-fn))]
      ])))

(defn update-html
  [session params state]
  (let [id-list (clojure.string/split (:id params) #"-")
        records (let [records (map (fn [id]
                                     (user-dao/find-by-id id)) id-list)]
                  records)]
    (main/admin-page-html-wrapper
     session
     params
     (crud-update/get-html-multiple
      session
      params
      state
      setting/list-conf
      records
      (:fields setting/list-conf)
      (count id-list)))))

(defn insert-html
  [session params state]
  (main/admin-page-html-wrapper
   session
   params   
   (crud-update/get-html-multiple
    session
    params
    state
    setting/list-conf
    nil
    (:fields setting/list-conf)
    (if (:count params) 
      (Integer. (:count params)) 1))))
