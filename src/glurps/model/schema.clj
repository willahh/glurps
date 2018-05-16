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
        columns (:columns table)]
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

(defmacro def-glu-table [name columns]
  {:name name
   :columns (into []
                  (map map-column-to-jdbc-column columns))})


(def-glu-table "glu_group" [{:name "group_id" :type "int" :null false :primary true :auto_increment true}
                            {:name "name" :type "varchar(255)" :null false}
                            {:name "create_date" :type "datetime" :null false}
                            {:name "update_date" :type "datetime" :null false}
                            {:name "active" :type "boolean" :default "1"}])

(def-glu-table "glu_user" [{:name "user_id" :type "int" :null false :primary true :auto_increment true}
                           {:name "name" :type "varchar(255)" :null false}
                           {:name "create_date" :type "datetime" :null false}
                           {:name "update_date" :type "datetime" :null false}
                           {:name "active" :type "boolean" :default "1"}])

(create-table group-table)
(create-table user-table)

(defentity glu-group
  (table :glu_group)
  (entity-fields :group_id :name :create_date :update_date :active))

(insert glu-group (values {:name "test"
                           :create_date (new java.util.Date)
                           :update_date (new java.util.Date)
                           }))

(select glu-group)