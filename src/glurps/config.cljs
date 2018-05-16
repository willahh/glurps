(ns glurps.config
  (:require [glurps.config.config-edn :as config-edn]))

(defn getconf [key]
  (let [conf config-edn/data]
    ((keyword key) conf)))
