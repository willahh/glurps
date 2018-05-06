(ns glurps.model.user-group.user-group-dao
  (:require [glurps.config :as config]
            [wlh.db :as db]
            [glurps.model.user.user-group-model :as user-group-model]))

(def schema
  {:table-name "glu_user_group"
   :cols (user-group-model/get-fields)})

(defn insert [record]
  (db/insert (config/get :db-spec)
             (:table-name schema)
             (:cols schema)
             (into {} record)))

(defn update! [set-map where-clause]
  (db/update! (config/get :db-spec) (schema :table-name) set-map where-clause))

(defn delete [id]
  (db/delete (config/get :db-spec) (schema :table-name) id))
