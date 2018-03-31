(ns glurps.core
  (:require [hiccup.page :refer [include-js include-css html5]]
            [hickory.core]
            [net.cgrand.enlive-html :as ehtml]
            [clojure.string :as str]))

(defn parse-url [url]
  (println url))

;; ;; (def html (slurp "https://news.ycombinator.com/"))
;; ;; (def tmlh (slurp "resources/new.ycombinator.com.html"))
;; (def html (slurp "http://www.allocine.fr/"))
;; (def html-hiccup (hickory.core/as-hiccup (hickory.core/parse html)))

;; (ehtml/select (ehtml/text html) [:a])
;; (ehtml/at [:ul] [:a :b])
;; (ehtml/select html-hiccup [:body])


(def url "http://www.allocine.fr/")

(defn fetch-url [url]
  (ehtml/html-resource (java.net.URL. url)))

(def page (fetch-url url))


(defn get-sorties-week []
  (let [rows  (map ehtml/text (ehtml/select page [:div.mdl-inside :div.roller-item :div.meta]))]
    rows))

(defn clean-string [str]
  "Removes excess spaces at the beginning and end of the chain, as well as line
breaks"
  (clojure.string/replace
   (clojure.string/replace (clojure.string/replace str #"^ +" "")
                           #" +$" "") #"\n" ""))

(defn get-sorties-week-author [str]
  (clojure.string/replace
   (clean-string (nth (clojure.string/split str #" \n") 2))
   #"^De " ""))

(defn get-sorties-week-title [str]
  (clean-string (nth (clojure.string/split str #" \n") 0)))

(get-sorties-week-author (nth (get-sorties-week) 1))
(get-sorties-week-title (nth (get-sorties-week) 1))

(defn get-sorties-week-rows []
  (map (fn [row]
         {:author (get-sorties-week-author row)
          :title (get-sorties-week-title row)})
       (get-sorties-week)))

(get-sorties-week-rows)







(defn -main [& args]
  (def array-args (into [] args))
  
  (let [[type url] array-args]
    (if (= type "-url")
      (parse-url url))))


(apply -main "a" "b")
