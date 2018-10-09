(ns glurps.process.db.db
  (:use korma.db
        korma.core)
  (:require [clojure.java.jdbc :as j]
            [clojure.spec.alpha :as s]))

;; Define the db
(def db (mysql {:host "localhost"
                :db "glurps"
                :user "root"
                :password "root"}))

(defdb glurps db)

(defn- merge-vector-of-map [v1 v2]
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

(defn- map-column-to-jdbc-column [col]
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

(defn params-to-korma [params]
  (let [where-clause (list 'where {:fav "on"})
        order (when (:order params)
                (reverse (conj '()
                               'order
                               (keyword (:order params))
                               (keyword (if (= (:asc params) "1")
                                          :ASC :DESC)))))
        limit (when (:limit params)
                (reverse (conj () 'limit (:limit params))))
        offset (when (:offset params)
                 (reverse (conj () 'offset (:offset params))))]
    (reverse (remove #(= nil %) 
                     (conj '()
                           where-clause
                           order
                           limit
                           offset)))))

(defn create-table [db table]
  (let [name (:name table)
        columns (:jdbc-columns table)]
    (j/db-do-commands db 
                      (clojure.string/lower-case 
                       (j/create-table-ddl name columns
                                           {:table-spec "ENGINE=InnoDB"
                                            :entities clojure.string/upper-case})))))

(defn drop-table [db name]
  (j/db-do-commands db (j/drop-table-ddl name)))

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

(defn create-table [table]
  (let [name (:name table)
        columns (:columns table)]
    (j/db-do-commands db 
                      (clojure.string/lower-case 
                       (j/create-table-ddl name columns
                                           {:table-spec "ENGINE=InnoDB"
                                            :entities clojure.string/upper-case})))))


(create-table group-table)


;; (defmacro select-from-params [table query]
;;   `(select ~table ~@(params-to-korma query)))


;; (defn select-from-params [db params]
;;   (eval `(-> (select* (deref db))
;;              ~@(params-to-korma params)
;;              exec)))