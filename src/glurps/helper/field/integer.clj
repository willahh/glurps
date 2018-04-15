(ns glurps.helper.field.integer
  (:require [glurps.config :as config]
            [wlh.logger :as logger]))

(defn get-update-html [record]
  [:input {:name "test" :id "a" :value "int int"}])
