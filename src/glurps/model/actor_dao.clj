(ns glurps.model.actor-dao
  (:require [glurps.model.actor-dto :as actor]
            [clojure.java.jdbc :as jdbc]
            [wlh.db :as db]
            [glurps.util.db-allocine :as db-allocine]
            [glurps.util.logger :as logger]))

(def schema {:table-name "actor"
             :cols (actor/get-fields)
             :cols-to-insert (into [] (filter #(not= % "id") (actor/get-fields)))})

(defn insert [row & args]
  "Row is a map of database column name as key and database value as value"
  (logger/info "model.actor/insert" (identity args))
  (db-allocine/insert (keyword (schema :table-name)) (schema :cols-to-insert) row))

(def actor (actor/make-actor {:alloid 10
                              :name "ok"
                              :job "Yo"
                              :nationality "test"
                              :age 30
                              :birthdate "a"
                              :filmography "ok"
                              :picture "a"}))

(defn insert-actor [actor-record]
  (db/insert2 db-allocine/db-spec
              (schema :table-name)
              (schema :cols)
              (into {} actor-record)))





(defn get-by-name [name]
  (db/query db-allocine/db-spec (str "SELECT * FROM \"" (schema :table-name) "\" WHERE \"name\" = '" name "'")))

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
