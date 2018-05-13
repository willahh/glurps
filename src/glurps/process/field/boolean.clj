(ns glurps.process.field.boolean
  (:require [glurps.config :as config]
            [wlh.logger :as logger]))

(defn get-readonly-html [field-name record value]
  value)

(defn get-update-html [field-name record value]
  [:input {:type "checkbox" :name field-name :id field-name}])
