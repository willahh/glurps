(ns glurps.config
  (:require [clojure.edn :as edn]))

(def conf-path "src/glurps/config/config.edn")

(defn load-config
  "Given a filename, load & return a config file"
  [filename]
  (edn/read-string (slurp filename)))

(defn get [key]
  (let [conf (load-config conf-path)]
    (conf key)))
