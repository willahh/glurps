(ns glurps.model.group.group-dao
  (:require [glurps.config :as config]
            [wlh.db-orientdb :as db-orientdb]
            [wlh.logger :as logger]
            [glurps.model.group.group-model :as group-model]))

(def schema {:class-name "Group"})

(defn get-list [params offset limit]
  (db-orientdb/query 
   (let [clause (db-orientdb/clause-from-params params)]
     (str "select * from " (:class-name schema) " " clause " limit " limit " offset " offset))))

(defn count! []
  (:count (first (db-orientdb/query 
                  (str "select count(*) from " (:class-name schema))))))

(defn disable-count []
  (:count (first 
           (db-orientdb/query
            (str "select count(*) from " (:class-name schema)`" where enable = false")))))

(defn enable-count []
  (:count (first 
           (db-orientdb/query
            (str "select count(*) from " (:class-name schema)`" where enable = true")))))

(defn find-by-id [id]
  (db-orientdb/find-record (:class-name schema) id))

(defn- update! [record-content id]
  (let [rid (str "#" id)]
    (db-orientdb/update-record (:class-name schema)
                               rid (conj record-content {:UpdateDate (new java.util.Date)}))))

(defn update-record-properties [record-content id]
  (update! (merge (find-by-id id) record-content) id))

(defn insert [record-content]
  (db-orientdb/create-record (:class-name schema)
                             (conj record-content {:CreateDate (new java.util.Date)
                                                   :UpdateDate (new java.util.Date)})))

(defn delete [id]
  (logger/info "group_dao delete:" id)
  (db-orientdb/delete-record id))

(defn enable [id]
  (update-record-properties {:enable true} id))

(defn disable [id]
  (update-record-properties {:enable false} id))

(defn fav [id]
  (update-record-properties {:fav true} id))

(defn unfav [id]
  (update-record-properties {:fav false} id))
