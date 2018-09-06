(ns glurps.model.group.group-dao
  (:use [korma.core])
  (:require 
   [glurps.model.schema :as schema]
   [glurps.process.db.db :as db :refer [select-from-params]]))

(defn get-list [params p-offset p-limit]
  (select-from-params schema/glu-group (merge params {:offset p-offset :limit p-limit})))

(defn count! []
  (count (select schema/glu-group)))

(defn disable-count []
  (count (select schema/glu-group
                 (where {:active false}))))

(defn enable-count []
  (count (select schema/glu-group
                 (where {:active true}))))

(defn find-by-id [id]
  (select schema/glu-group
        (where {:group_id id})))

(defn update-record-properties [record-content id]
  (update schema/glu-group
          (set-fields record-content)
          (where {:group_id id})))

(defn insert! [record-content]
  (insert schema/glu-group
          (values record-content)))

(defn delete! [id]
  (delete schema/glu-group (where {:group_id id})))

(defn find-user-from-group-id [id]
  nil)
