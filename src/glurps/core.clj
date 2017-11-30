(ns glurps.core
  (:gen-class))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(defn parse-url [url]
  (println url))

(defn -main [& args]
  (def array-args (into [] args))
  
  (let [[type url] array-args]
    (if (= type "-url")
      (parse-url url))))


(apply -main "a" "b")
