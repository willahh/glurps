(ns glurps.model.schema
  (:use korma.db
        korma.core)
  (:require [clojure.java.jdbc :as j]))

(def db (mysql {:host "localhost"
                :db "glurps"
                :user "root"
                :password "root"}))

(defn create-table [table]
  (let [name (:name table)
        columns (:jdbc-columns table)]
    (j/db-do-commands db 
                      (clojure.string/lower-case 
                       (j/create-table-ddl name columns
                                           {:table-spec "ENGINE=InnoDB"
                                            :entities clojure.string/upper-case})))))

(defn drop-table [name]
  (j/db-do-commands db (j/drop-table-ddl name)))

(defn map-column-to-jdbc-column [col]
  (into []
        (flatten
         (map (fn [a]
                (let [k (first a)
                      v (first (rest a))]
                  (conj []
                        (case k
                          :name [(keyword v)]
                          :type [v]
                          :null (if-not v [:not :null])
                          :primary (when v [:primary :key])
                          :auto_increment (when v [:auto_increment])
                          :default (when v [:default v])
                          nil)))) col))))

(defmacro def-glu-table [name columns & {:keys [extend]}]
  {:name name
   :columns columns
   :jdbc-columns (into []
                       (map map-column-to-jdbc-column columns))})

(defn map-columns-to-entity-fields [glu-table]
  (map #(keyword (:name %)) (:columns glu-table)))

(def abstract-col-table
  (def-glu-table "glu_abstract_col"
    [{:name "create_date" :type "datetime" :null false}
     {:name "update_date" :type "datetime" :null false}
     {:name "active" :type "boolean" :default "1"}]))


;; ---------------------------------------

;; #:person{:first "Han"
;;          :last "Solo"
;;          :ship #:ship{:name "Millenium Falcon"
;;                       :model "YT-1300f light freighter"}}


;; :person/ship

;; #:group{:name "test"}

;; {:group/name "test2"}

;; :group/name


;; {:person/first "Han"
;;  :person/last "Solo"
;;  :person/ship {:ship/name "Millenium Falcon"
;;                :ship/model "YT-1300f light freighter"}}





(def user-table 
  (def-glu-table "glu_user" [{:name "user_id" :type "int" :null false :primary true :auto_increment true}
                             {:name "name" :type "varchar(255)" :null false}
                             {:name "create_date" :type "datetime" :null false}
                             {:name "update_date" :type "datetime" :null false}
                             {:name "active" :type "boolean" :default "1"}]))

(create-table user-table)

(def group-table 
  (def-glu-table "glu_group" [{:name "group_id" :type "int" :null false :primary true :auto_increment true}
                              {:name "name" :type "varchar(255)" :null false}
                              {:name "create_date" :type "datetime" :null false}
                              {:name "update_date" :type "datetime" :null false}
                              {:name "active" :type "boolean" :default "1"}]
    :extend abstract-col-table))
(create-table group-table)

(defentity glu-group
  (database db)
  (table (keyword (:name group-table)))
  ;; (entity-fields (map-columns-to-entity-fields group-table))
  (entity-fields :group_id :name :create_date :update_date :active))

(map-columns-to-entity-fields group-table)

(insert glu-group (values {:name "test"
                           :create_date (new java.util.Date)
                           :update_date (new java.util.Date)}))

(select glu-group)