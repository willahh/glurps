(ns glurps.admin.group.html
  (:require [clojure.string :as str]
            [glurps.admin.group.setting :as setting]
            [glurps.admin.user.setting :as user-setting]
            [glurps.admin.main :as main]
            [glurps.process.crud.show :as crud-show]
            [glurps.process.crud.update :as crud-update]
            [glurps.process.crud.list :as crud-list]
            [glurps.model.group.group-dao :as group-dao]
            [glurps.model.user.user-dao :as user-dao]))

(defn list-html [session params state]
  (main/admin-page-html-wrapper 
   session
   params
   (crud-list/get-html-wrapper session
                               params
                               state
                               setting/list-conf
                               (group-dao/enable-count)
                               group-dao/get-list
                               (group-dao/disable-count))))

(defn show-html [session params state]
  (let [id (:id params)
        record (group-dao/find-by-id id)
        fields (:fields setting/list-conf)]
    (main/admin-page-html-wrapper
     session
     params
     (crud-show/get-html fields record)
     
     
     ;; (let [records (user-dao/find-user-list-from-group-id {:active 1} (Integer. id) 0 10)]         
     ;;   [:div 
     ;;    [:h2 "Users"]
     ;;    (crud-list/get-html (filter (fn [record]
     ;;                                  (when (not= (:name record) "group_name") record))
     ;;                                (:fields user-setting/list-conf))
     ;;                        records
     ;;                        "login"
     ;;                        1
     ;;                        setting/list-conf
     ;;                        "user"
     ;;                        (:list-action-html-fn setting/list-conf))])
     
     )))



(let [records (map (fn [id]
                     (group-dao/find-by-id id)) ["41:7" "#40:7"])]
  records)


(defn update-html [session params state]
  (let [id-list (clojure.string/split (:id params) #"-")
        records (let [records (map (fn [id]
                                     (group-dao/find-by-id id)) id-list)]
                  records)]
    ;; records (group-dao/find-by-id id)]
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

;; (clojure.string/split "36:9-35:9" #"-")
;; (clojure.string/split "36:9" #"-")

(update-html {} {:id "36:9-35:9"} {})

(defn insert-html [session params state]
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
