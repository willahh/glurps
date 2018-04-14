(ns glurps.process.logger.logger
  (:require [clojure.string :as string]))

;; TODO implements clojure.java.io stream

(def logger-file-path "resources/log.log")
(defn- arguments-to-line [level & args]
  (str
   (.format (java.text.SimpleDateFormat. "yyyy-mm-dd hh:mm:ss")
            (new java.util.Date))
   " "
   (string/upper-case (name level)) ": "
   (string/join " " (into [] args))
   "\n"))

(defmacro arguments-to-line-macro [level & args]
  `(str
    (.format (java.text.SimpleDateFormat. "yyyy-mm-dd hh:mm:ss")
             (new java.util.Date))
    " "
    (string/upper-case (~name ~level)) ": "
    (string/join " " (~into [] ~args))
    "\n"))


(defn log [level & args]
  (spit logger-file-path (apply arguments-to-line level args) :append true))

(defn info [& args]
  (apply log :info args))

(defn warn [& args]
  (apply log :warn args))

(defn error [& args]
  (apply log :error args))

(defn fatal [& args]
  (apply log :fatal args))

(defn trace [& args]
  (apply log :trace args))

(defn- line-format [line & f-format]
  ((first f-format) line))

(defn reverse-recursively [coll]
  "Reverse recursively a collection"
  (loop [[r & more :as all] (seq coll)
         acc '()]
    (if all
      (recur more (cons r acc))
      acc)))

(defn- multi-nth [values indices & f-format]
  (keep 
   (fn [[number line]] 
     (if (contains? indices number) 
       (line-format line (first f-format))))
   (map-indexed vector values)))

(defn read-lines [file indices & f-format]
  (with-open [reader (clojure.java.io/reader file)]
    (let [lines (reverse-recursively (line-seq reader))]
      (doall (multi-nth lines indices (first f-format))))))

(defn- format-default [line]
  "Default format line"
  line)

(defn- format-html [line]
  "Html format line"
  [:div line])

(def format-map
  "Key is type of format, value is formatter function"
  {:html format-html
   :default format-default})

(defn read-lines-from-to [filepath from to & {:keys [output]}]
  (let [output-f (format-map (keyword output))]
    (read-lines filepath (into #{} (into #{} (range from (+ from to)))) output-f)))
