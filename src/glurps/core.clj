(ns glurps.core
  (:require [hiccup.page :refer [include-js include-css html5]]
            [hickory.core]
            [net.cgrand.enlive-html :as ehtml]
            [clojure.string :as str]
            [glurps.sheet]))

(def url "http://www.allocine.fr/")

(defn fetch-url [url]
  (ehtml/html-resource (java.net.URL. url)))

(def page (fetch-url url))

(defn get-sorties-week [page]
  (let [rows  (map ehtml/text (ehtml/select page [:div.mdl-inside :div.roller-item :div.meta]))]
    rows))

(defn get-sorties-image [page]
  (map (fn [row] ((row :attrs) :src))
       (ehtml/select page [:div.mdl-inside :div.roller-item :img])))

(defn get-sorties-url [page]
  (map (fn [row]
         ((row :attrs) :href))
       (ehtml/select page
                     [:div.mdl-inside :div.roller-item :div.meta :a])))

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

(defn get-sorties-week-rows [page]
  (map (fn [a b url]
         {:author (a :author)
          :title (a :title)
          :image b
          :url url
          :description (glurps.sheet/get-description url)})
       (map (fn [row]
              {:author (get-sorties-week-author row)
               :title (get-sorties-week-title row)})
            (get-sorties-week page))
       (get-sorties-image page)
       (get-sorties-url page)))

(get-sorties-week-rows page)














(defn -main [& args]
  (def array-args (into [] args))
  
  (let [[type url] array-args]
    (if (= type "-url")
      (parse-url url))))


(apply -main "a" "b")













