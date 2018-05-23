(ns glurps.model.group.group-dao
  (:use korma.db
        korma.core
        glurps.process.db.db)
  (:require [glurps.config :as config]
            [glurps.model.abstract-dao :as abstract-dao]
            [glurps.model.schema :as schema]))

;; (abstract-dao/AbstractDAO)
;; (extend-protocol abstract-dao)
;; (get-list {} 1 2)

(defn get-list [params offset limit]
  (select-from-params schema/glu-group params))

(defn count! []
  10)

(defn disable-count []
  20)

(defn enable-count []
  1)

(defn find-by-id [id]
  nil)

(defn- update! [record-content id]
  nil)

(defn update-record-properties [record-content id]
  nil)

(defn insert! [record-content]
  nil)

(defn delete! [id]
  nil)

(defn find-user-from-group-id [id]
  nil)
