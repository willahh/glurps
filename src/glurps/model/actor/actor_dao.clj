(ns glurps.model.actor.actor-dao
  (:require [glurps.model.actor.actor-model :as actor]
            [clojure.java.jdbc :as jdbc]
            [wlh.db :as db]
            [glurps.process.db.db-allocine :as db-allocine]
            [wlh.logger :as logger]
            [clojure.java.jdbc :as jdbc]))

(defn bool-to-int [bool]
  "Cast boolean into an integer 1 or 0."
  (if bool 1 0))

(def schema 
  "Describe the schema of the database."
  {:table-name "actor"
   :cols (actor/get-fields)})

(defn insert [actor-record]
  "Takes a record actor, insert it in the database."
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

(defn get-clauses-from-params [params]
  "Takes a `params` map and returns a clauses vector that will be used by honeysql.
  `params` represents the page parameters. e.g POST, GET, parameters."
  (let [and (conj []
                  (when (:fav params)
                    [:= :fav 1])
                  (when (:active params)
                    [:= :active (bool-to-int (:active params))]))
        and-clean (into [] (filter second and))]
    
    (if (= (count and-clean) 1)
      {:where (first and-clean)}
      (if (> (count and-clean) 1)
        {:where
         (into [] (cons :and and-clean))}))))

(defn get-sql-map-from-params [params]
  "Given a params of form {:sort-by 'name', :asc 1, :limit '10'},
  returns a honeysql sql-map.
  `params` represents the page parameters. e.g
  POST, GET, parameters."
  (let [clauses []]
    (when (:fav params)
      (conj clauses {:where [:= :fav (:fav params)]}))
    (conj {}
          {:select [:*]}
          {:from [:actor]}
          (get-clauses-from-params params)
          (when (:sort-by params)
            {:order-by [[(keyword (:sort-by params))
                         (if (= (:asc params) "1")
                           :asc :desc)]]}))))

(defn get-list2 [params offset limit]
  (db/query2 db-allocine/db-spec (get-sql-map-from-params params) offset limit))

(defn count2 []
  (get-count (db/query db-allocine/db-spec
                       (str "SELECT COUNT(*) FROM \"" (schema :table-name) "\""))))

(defn get-list-disable [params offset limit & args]
  (db/query db-allocine/db-spec
            (str "SELECT * FROM \"actor\" WHERE \"active\" = '0' LIMIT " limit " OFFSET " offset)))

(defn find-actor-by-name-list [actor-name-list]
  "Find rows of actor by a list of actor name"
  (filter #(some? %)
          (let [actors actor-name-list]
            (for [actor actors]
              (if-let [actor-row (first (get-by-name actor))]
                actor-row)))))


(defn fav [id]
  "Set record to favorite"
  (db/update2 db-allocine/db-spec (schema :table-name) 
              {:fav 1} [(str "id = " id)]))

(defn unfav [id]
  "Unset record to favorite"
  (db/update2 db-allocine/db-spec (schema :table-name) 
              {:fav 0} [(str "id = " id)]))