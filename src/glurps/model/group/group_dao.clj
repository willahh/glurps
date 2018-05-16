(ns glurps.model.group.group-dao
  (:require [glurps.config :as config]))

(def schema {:class-name "Group"})
(defn get-list [params offset limit])
(defn count! [])
(defn disable-count [])
(defn enable-count [])
(defn find-by-id [id])
(defn- update! [record-content id])
(defn update-record-properties [record-content id])
(defn insert [record-content])
(defn delete [id])
(defn find-user-from-group-id [id])
