(ns glurps.config
  (:require [glurps.config-edn :as config-edn]))

(defn get [key]
  (let [conf config-edn/data]
    ((keyword key) conf)))
