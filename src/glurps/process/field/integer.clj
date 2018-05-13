(ns glurps.process.field.integer
  (:require [glurps.config :as config]
            [wlh.logger :as logger]))

(defn get-readonly-html [field-name record value]
  value)

(defn get-update-html [field-name record value]
  [:input {:type "number" :name (str field-name "[]") :id field-name :value value}])
