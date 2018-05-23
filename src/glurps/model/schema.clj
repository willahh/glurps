(ns glurps.model.schema
  (:use korma.db
        korma.core
        glurps.process.db.db)
  (:require [clojure.java.jdbc :as j]
            [clojure.spec.alpha :as s]
            [glurps.model.abstract-dao :as abstract-dao]))

;; -- Define tables -----------------------------------------------
(def abstract-col-table
  (def-glu-table "glu_abstract_col" [{:name "create_date" :type "datetime" :null false}
                                     {:name "update_date" :type "datetime" :null false}
                                     {:name "active" :type "boolean" :default "1"}
                                     {:name "fav" :type "boolean" :default "0"}]))

(def group-table 
  (def-glu-table "glu_group" [{:name "group_id" :type "int" :null false :primary true :auto_increment true}
                              {:name "name" :type "varchar(255)" :null false}]
    :extend abstract-col-table))

(def user-table 
  (def-glu-table "glu_user" [{:name "user_id" :type "int" :null false :primary true :auto_increment true}
                             {:name "name" :type "varchar(255)" :null false}
                             {:name "create_date" :type "datetime" :null false}
                             {:name "update_date" :type "datetime" :null false}
                             {:name "active" :type "boolean" :default "1"}]))

;; -- Define entities -----------------------------------------------
(defentity glu-group
  (table :glu_group)
  (database glurps)
  (entity-fields (:fields group-table)))

(defentity glu-group
  (table :glu_group)
  (database glurps)
  (entity-fields :name :group_id :create_date :update_date :active :fav))

;; (defentity glu-group
;;   (table :glu_group)
;;   (database glurps)
;;   (entity-fields `@~(into () (:fields group-table))))

;; Create tables ----------------------------
;; (create-table db user-table)
;; (create-table db group-table)






;; Test some data insert / select ---------------
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

;; Some insert
(insert glu-group (values {:name (str "test" (rand)) 
                           :create_date (new java.util.Date)
                           :update_date (new java.util.Date)}))

;; Some select
(select-from-params glu-group {})
(select-from-params glu-group {:fav "on"})
(select-from-params glu-group {:fav "on" :active "on" :order "group_id" :asc "0" :limit 2 :offset 0})
(select-from-params glu-group {:fav "on" :active "on" :order "name"})
(select-from-params glu-group {:fav "on" :active "on" :order "group_id" :asc "1"})
(select-from-params glu-group {:fav "on" :active "on" :order "name" :asc "1" :limit 2 :offset 1})
(select glu-group)
(select glu-group
        (where {:active true
                :fav "on"})
        (order :name :DESC)
        (limit 3)
        (offset 0))








;; (defmulti convert class)

;; (defmethod convert clojure.lang.Keyword [data]
;;   (convert (name data)))

;; (defmethod convert java.lang.String [data]
;;   (str "\"" data "\""))

;; (defmethod convert nil [data]
;;   "null")

;; (defmethod convert :default [data]
;;   13   (str data))


;; (convert "a")
;; (convert a)
;; (convert nil)
;; (convert )

;; (defprotocol P
;;   (foo [x])
;;   (bar-me [x] [x y]))

;; (deftype Foo [a b c]
;;   P
;;   (foo [x] a)
;;   (bar-me [x] b)
;;   (bar-me [x y] (+ c y)))

;; ;; (bar-me (Foo. 1 2 3) 42)

;; (bar-me (Foo. 1 2 3) 42)
;; (bar-me (Foo. 1 2 3) 12)
















;; (deftype Employee [name id]
;;   Object
;;   (equals [a b] (= (.id a) (.id b)))
;;   (hashCode [this] (.hashCode (.id this)))
;;   (toString [this] (.name this)))

;; (def vince (Employee. "Vince" 42))

;; (def vincent (Employee. "Vincent" 42))

;; (def tony (Employee. "Tony" 2))

;; (into #{} [vince vincent tony])












