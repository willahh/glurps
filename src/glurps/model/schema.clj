(ns glurps.model.schema
  (:use korma.db
        korma.core)
  (:require [clojure.java.jdbc :as j]
            [clojure.spec.alpha :as s]
            [glurps.process.db.db :as db]))


;; -- Define tables -----------------------------------------------
(def abstract-col-table
  (db/def-glu-table "glu_abstract_col" [{:name "create_date" :type "datetime" :null false}
                                        {:name "update_date" :type "datetime" :null false}
                                        {:name "active" :type "boolean" :default "1"}
                                        {:name "fav" :type "boolean" :default "0"}]))

(def group-table 
  (db/def-glu-table "glu_group" [{:name "group_id" :type "int" :null false :primary true :auto_increment true}
                                 {:name "name" :type "varchar(255)" :null false}]
    :extend abstract-col-table))

(def user-table 
  (db/def-glu-table "glu_user" [{:name "user_id" :type "int" :null false :primary true :auto_increment true}
                                {:name "name" :type "varchar(255)" :null false}
                                {:name "create_date" :type "datetime" :null false}
                                {:name "update_date" :type "datetime" :null false}
                                {:name "active" :type "boolean" :default "1"}]))

;; -- Define entities -----------------------------------------------
(defentity glu-group
  (table :glu_group)
  (database db/glurps)
  (entity-fields (:fields group-table)))

(defentity glu-group
  (table :glu_group)
  (database db/glurps)
  (entity-fields :name :group_id :create_date :update_date :active :fav))

;; (defentity glu-group
;;   (table :glu_group)
;;   (database glurps)
;;   (entity-fields `@~(into () (:fields group-table))))








;; Create tables ----------------------------
(db/create-table db/db user-table)
(db/create-table db/db group-table)











;; Test some data insert / select
;; Define some specs
;; (s/def ::group_id int?)
;; (s/def ::name string?)
;; (s/def ::create_date inst?)
;; (s/def ::update_date inst?)
;; (s/def ::group (s/keys :req [::name ::create_date ::update_date]))

;; (s/explain-str ::group
;;                {::name ""
;;                 ::create_date (new java.util.Date)
;;                 ::update_date (new java.util.Date)})

;; (defrecord Group [name create_date update_date])
;; (s/explain-str ::group (->Group "yo" (new java.util.Date) (new java.util.Date)))

;; Do some insert ----------
(insert glu-group (values {:name (str "test" (rand)) 
                           :create_date (new java.util.Date)
                           :update_date (new java.util.Date)}))

;; Some insert select
(db/select-from-params glu-group {})
(db/select-from-params glu-group {:fav "on"})
(db/select-from-params glu-group {:fav "on" :active "on" :order "group_id" :asc "0" :limit 2 :offset 0})
(db/select-from-params glu-group {:fav "on" :active "on" :order "name"})
(db/select-from-params glu-group {:fav "on" :active "on" :order "group_id" :asc "1"})
(db/select-from-params glu-group {:fav "on" :active "on" :order "name" :asc "1" :limit 2 :offset 1})
(select glu-group)
(select glu-group
        (where {:active true
                :fav "on"})
        (order :name :DESC)
        (limit 3)
        (offset 0))



