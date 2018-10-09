(ns glurps.model.group.group-dao
  (:use korma.db
        korma.core
        glurps.process.db.db)
  (:require
   [glurps.admin.module.group.setting :as setting]
   ;; [glurps.process.db.db :as db :refer [select-from-params]]
   [glurps.model.abstract-dao :as abstract-dao]))

(def group-table
  (def-glu-table "glu_group" (:table setting/list-conf)
    :extend abstract-dao/abstract-col-table))

(defentity glu-group
  (table :glu_group)
  (database glurps)
  (entity-fields :name :group_id :create_date :update_date :active :fav))

(defn get-list [params]
  (eval `(-> (select* glu-group)
             ~@(params-to-korma params)
             exec)))

(defn disable-count []
  (count (select glu-group
                 (where {:active false}))))

(defn enable-count []
  (count (select glu-group
                 (where {:active true}))))

(defn find-by-id [id]
  (first (select glu-group
                 (where {:group_id id}))))

(defn update-record-properties [record-content id]
  (update glu-group
          (set-fields record-content)
          (where {:group_id id})))

(defn insert! [record-content]
  (insert glu-group
          (values record-content)))

(defn delete! [id]
  (delete glu-group (where {:group_id id})))

(defn find-user-from-group-id [id]
  nil)


