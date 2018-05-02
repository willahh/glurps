(ns glurps.config
  (:require 
   ;; [cljs.reader :as reader]
   ;; [cljs.tools.reader.edn :as edn]
   [glurps.config-edn :as config-edn]))

(defn get [key]
  (let [conf config-edn/data]
    ((keyword key) conf)))
