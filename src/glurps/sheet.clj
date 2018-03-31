(ns glurps.sheet
  (:require [net.cgrand.enlive-html :as html]))

(def root-url "http://www.allocine.fr")

(defn fetch-url [sheet-url]
  "sheet-url : /film/fichefilm_gen_cfilm=229831.html"
  (html/html-resource (java.net.URL. sheet-url)))

(defn get-description [sheet-url]
  (let [resource (fetch-url (str root-url sheet-url))]
    ((first (html/select resource [:div.synopsis-txt])) :content)))
