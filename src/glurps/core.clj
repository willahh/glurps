(ns glurps.core
  (:gen-class))

(defn parse-url [url]
  (println url))

(def html (slurp "https://news.ycombinator.com/"))

html


(defn -main [& args]
  (def array-args (into [] args))
  
  (let [[type url] array-args]
    (if (= type "-url")
      (parse-url url))))


(apply -main "a" "b")
