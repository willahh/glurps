(ns glurps.process.field.integer
  (:require [glurps.config :as config]
            [wlh.logger :as logger]))

(defn get-update-html [field-name record & field-conf]
  (let [value (when record (record (keyword field-name)))] 
    [:input {:type "number" :name field-name :id field-name :value value}]))
