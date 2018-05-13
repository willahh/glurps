(ns glurps.model.search.search-dao
  (:require [glurps.config :as config]
            [wlh.db-orientdb :as db-orientdb]))

(defn get-list [params offset limit]
  (db-orientdb/query 
   (str "select from V where any() containstext '" (:query params) "' limit " limit " offset " offset)))

(defn enable-count []
  (:count (first 
           (db-orientdb/query
            (str "select count(*) from V where enable = true")))))
