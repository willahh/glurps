(ns glurps.model.user.user-dao
  (:require [wlh.db :as db]
            [glurps.process.db.db-allocine :as db-allocine]
            [glurps.model.user.user-model :as user-model]))

(def schema
  {:table-name "user"
   :cols (user-model/get-fields)})

(defn get-list [params offset limit]
  (db/query2 db-allocine/db-spec (get-sql-map-from-params params) offset limit))

