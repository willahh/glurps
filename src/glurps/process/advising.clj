(ns glurps.process.advising
  (:require [richelieu.core :refer :all]
            [clojure.java.jdbc :as jdbc]))


(defn get-by-name [name]
  (jdbc/query {:classname "org.sqlite.JDBC"
               :subprotocol "sqlite"
               :subname "/Users/willahh/www/projects/clojure/glurps/resources/databases/allocine.db"} (str "SELECT * FROM \"" "actor" "\" WHERE \"name\" = '" name "'")))

(get-by-name "Francis Lawrence")


(defadvice log []
  (println "log"))


;; (advise-var #'jdb/query log)
(advise-ns jdb/query log)


(defn add [& xs] (apply + xs))
(defn mult [& xs] (apply * xs))
(defn sum-squares [& xs]
  (apply add (map #(mult % %) xs)))

(def ^:dynamic *trace-depth* 0)

(defn- ^:richelieu.core/no-advice trace-indent []
  (apply str (repeat *trace-depth* \space)))

(defadvice trace
  "Writes passed arguments and passes them to underlying
  function. Writes resulting value before returning it as result."
  [f & args] 
  (println "%s> %s %s\n" (trace-indent) *current-advised* args)
  (let [res (binding [*trace-depth* (inc *trace-depth*)]
              (apply f args))]
    (println "%s< %s %s\n" (trace-indent) *current-advised* res)
    res))

(advise-var #'add trace)
(unadvise-var #'add trace)

;;; This is safe because we used `defadvice` to prevent trace from
;;; advising itself--or other advice functions.

(advise-ns 'user trace)

(sum-squares 1 2 3 4)


