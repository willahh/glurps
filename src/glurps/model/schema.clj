(ns glurps.model.schema
  (:use korma.db
        korma.core)
  (:require [clojure.java.jdbc :as j]
            [clojure.spec.alpha :as s]))

(defn merge-vector-of-map [v1 v2]
  "Merge two vectors of map.
  Note: this is bad implemented but i don't know how
  do better for now."
  (let [cnt (count v2)
        result (atom [])]
    (dotimes [i cnt]
      (let [m1 (when (< i (count v1)) (nth v1 i))
            m2 (nth v2 i)]
        (swap! result conj (merge m1 m2))))
    @result))

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

(defn def-glu-table [name columns & {:keys [extend]}]
  (let [abstract-columns (when extend (:columns extend))
        abstract-jdbc-columns (when abstract-columns
                                (map map-column-to-jdbc-column abstract-columns))
        columns (merge-vector-of-map abstract-columns columns)
        target-jdbc-columns (map map-column-to-jdbc-column columns)        
        jdbc-columns (into []
                           (if abstract-jdbc-columns 
                             (apply merge abstract-jdbc-columns target-jdbc-columns)
                             target-jdbc-columns))] 
    
    {:name name
     :columns columns
     :jdbc-columns jdbc-columns
     :fields (into [] (map #(first %) jdbc-columns))}))

(defn map-columns-to-entity-fields [glu-table]
  (map #(keyword (:name %)) (:columns glu-table)))



;; -------------------------------------------------
;; Define the db
(def db (mysql {:host "localhost"
                :db "glurps"
                :user "root"
                :password "root"}))

(defdb glurps db)


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



;; -- Define entities -----------------------------------------------
(defentity glu-group
  (table :glu_group)
  (database glurps)
  (entity-fields (:fields group-table)))

;; Create tables
(create-table group-table)


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




;; Do some inset
(insert glu-group (values {:name "test"
                           :create_date (new java.util.Date)
                           :update_date (new java.util.Date)}))

;; Do some select
(select glu-group)



;; -- User entity/spec -----------------------------------------------
(def user-table 
  (def-glu-table "glu_user" [{:name "user_id" :type "int" :null false :primary true :auto_increment true}
                             {:name "name" :type "varchar(255)" :null false}
                             {:name "create_date" :type "datetime" :null false}
                             {:name "update_date" :type "datetime" :null false}
                             {:name "active" :type "boolean" :default "1"}]))

(create-table user-table)