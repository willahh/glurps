(ns glurps.model.actor-dao
  (:require [glurps.model.actor-dto :as actor]
            [clojure.java.jdbc :as jdbc]
            [wlh.db :as db]
            [glurps.util.db-allocine :as db-allocine]
            [wlh.logger :as logger]
            [clojure.java.jdbc :as jdbc]))

(def schema {:table-name "actor"
             :cols (actor/get-fields)})

(defn insert [actor-record]
  (db/insert2 db-allocine/db-spec
              (schema :table-name)
              (schema :cols)
              (into {} actor-record)))

(defn update [set-map where-clause]
  (db/update db-allocine/db-spec (schema :table-name) set-map where-clause))

(defn delete [id]
  (db/delete db-allocine/db-spec (schema :table-name) id))

(defn get-by-name [name]
  (db/query db-allocine/db-spec (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"name\" = '" name "'")))

(defn get-by-id [id]
  (first (db/query db-allocine/db-spec (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"id\" = '" id "'"))))

(defn get-list [offset limit & args]
  (db/query db-allocine/db-spec
            (str "SELECT * FROM \"actor\" LIMIT " limit " OFFSET " offset)))

(defn find-actor-by-name-list [actor-name-list]
  "Find rows of actor by a list of actor name"
  (filter #(some? %)
          (let [actors actor-name-list]
            (for [actor actors]
              (if-let [actor-row (first (get-by-name actor))]
                actor-row)))))
