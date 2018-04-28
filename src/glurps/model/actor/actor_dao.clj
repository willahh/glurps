(ns glurps.model.actor.actor-dao
  (:require [glurps.model.actor.actor-model :as actor]
            [clojure.java.jdbc :as jdbc]
            [wlh.db :as db]
            [glurps.process.db.db-allocine :as db-allocine]
            [wlh.logger :as logger]
            [clojure.java.jdbc :as jdbc]))

(def schema {:table-name "actor"
             :cols (actor/get-fields)})

(defn insert [actor-record]
  (db/insert2 db-allocine/db-spec
              (schema :table-name)
              (schema :cols)
              (into {} actor-record)))

(defn- get-count [col]
  (first (rest (first (first col)))))

(defn update2 [set-map where-clause]
  (db/update2 db-allocine/db-spec (schema :table-name) set-map where-clause))

(defn delete [id]
  (db/delete db-allocine/db-spec (schema :table-name) id))

(defn enable [id]
  (db/update2 db-allocine/db-spec (schema :table-name) 
              {:active 1} [(str "id = " id)]))

(defn disable [id]
  (db/update2 db-allocine/db-spec (schema :table-name) 
              {:active 0} [(str "id = " id)]))

(defn get-by-name [name]
  (db/query db-allocine/db-spec (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"name\" = '" name "'")))

(defn get-by-id [id]
  (first (db/query db-allocine/db-spec (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"id\" = '" id "'"))))

(defn get-list [offset limit & args]
  (db/query db-allocine/db-spec
            (str "SELECT * FROM \"actor\" WHERE \"active\" = '1' LIMIT " limit " OFFSET " offset)))

(defn bool-to-int [bool]
  (if bool 1 0))

(defn get-sql-map-from-filtermap [filter-map]
  "Given a filter-map of form {:sort-by 'name', :order-by 'asc', :limit '10'}, returns a honeysql sql-map."
  (conj {}
        {:select [:*]}
        {:from [:actor]}
        (when (:active filter-map)
          {:where [:= :active (bool-to-int (:active filter-map))]})
        (when (:sort-by filter-map)
          {:order-by [[(keyword (:sort-by filter-map))
                       (when (:order-by filter-map)
                         (keyword (:order-by filter-map)))]]})))

(defn get-list2 [filter-map offset limit]
  (db/query2 db-allocine/db-spec (get-sql-map-from-filtermap filter-map) offset limit))

(defn count2 []
  (get-count (db/query db-allocine/db-spec
                       (str "SELECT COUNT(*) FROM \"" (schema :table-name) "\""))))

(defn get-list-disable [filter-map offset limit & args]
  (db/query db-allocine/db-spec
            (str "SELECT * FROM \"actor\" WHERE \"active\" = '0' LIMIT " limit " OFFSET " offset)))

(defn find-actor-by-name-list [actor-name-list]
  "Find rows of actor by a list of actor name"
  (filter #(some? %)
          (let [actors actor-name-list]
            (for [actor actors]
              (if-let [actor-row (first (get-by-name actor))]
                actor-row)))))