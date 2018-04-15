(ns glurps.admin.actor.show
  (:require [glurps.config :as config]
            [glurps.module.crud.show :as show]
            [glurps.model.actor :as model-actor]))


(defn get-html []
  (show/get-html ["id" "name"] {:id 1 :name "ok"}))