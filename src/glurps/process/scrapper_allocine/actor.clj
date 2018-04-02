(ns glurps.process.scrapper-allocine.actor
  (:require [net.cgrand.enlive-html :as html]
            [clojure.core.cache :as cache]
            [glurps.config :as config]))

(defn get-url-from-id [id]
  (str (config/get :root-url) "/personne/fichepersonne_gen_cpersonne=" id ".html"))

(defn fetch-url [id]
  (let [url (get-url-from-id id)]
    (html/html-resource (java.net.URL. url))))

(defn get-html-from-id-or-html [id-or-html]
  (if (instance? clojure.lang.LazySeq id-or-html)
    id-or-html
    (fetch-url id-or-html)))

(defn cleanup [str]
  "Removes excess spaces at the beginning and end of the chain, as well as line
breaks"
  (-> (clojure.string/replace str #"\n" "")
      (clojure.string/replace #" +$" "")
      (clojure.string/replace #"^ +" "")))

(defn get-field-name [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (first ((first (html/select html [:div.titlebar-title])) :content))))

(defn get-field-job [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (into []
          (map #(first (% :content))
               (html/select html [:div.meta-body-item :strong :span])))))

(defn get-field-nationality [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (-> (html/select html [:div.meta-body-item])
        (nth 1)
        (:content)
        (nth 2)
        (cleanup))))

(defn get-field-birthdate [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (-> (html/select html [:div.meta-body-item])
        (nth 2)
        (html/select [:strong])
        (first)
        (:content)
        (first)
        (cleanup))))

(defn get-field-age [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (-> (html/select html [:div.meta-body-item])
        (nth 3)
        (:content)
        (html/select [:strong])
        (first)
        (:content)
        (first))))

(defn get-field-filmography [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (-> (html/select html [:div.person-biography])
        (first)
        (:content)
        (first)
        (cleanup))))

(defn get-field-picture [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (-> (html/select html [:div.card-person-overview :img.thumbnail-img])
        (first)
        (:attrs)
        (:src))))

(defn get-row-from-id [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    {:name (get-field-name id-or-html)
     :job (get-field-job id-or-html)
     :nationality (get-field-nationality id-or-html)
     :birthdate (get-field-birthdate id-or-html)
     :age (get-field-age id-or-html)
     :filmography (get-field-filmography id-or-html)
     :picture (get-field-picture id-or-html)}))

;; Tests
(def id-or-html (fetch-url "18940"))
;; (def id-or-html "229831")

(get-field-name id-or-html)
(get-field-job id-or-html)
(get-field-nationality id-or-html)
(get-field-birthdate id-or-html)
(get-field-age id-or-html)
(get-field-filmography id-or-html)
(get-field-picture id-or-html)
(get-row-from-id id-or-html)
(get-row-from-id "35365")
