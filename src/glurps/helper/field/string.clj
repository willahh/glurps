(ns glurps.helper.field.string
  (:require [glurps.config :as config]
            [wlh.logger :as logger]))

(defn get-update-html [field-name record & field-conf]
  [:input {:name field-name :id field-name :value (record (keyword field-name))}])
