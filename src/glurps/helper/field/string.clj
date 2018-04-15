(ns glurps.helper.field.string
  (:require [glurps.config :as config]
            [wlh.logger :as logger]))

(defn get-update-html [record]
  [:input {:name "test" :id "a" :value "ok"}])
