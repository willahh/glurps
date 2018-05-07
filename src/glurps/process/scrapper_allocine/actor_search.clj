glurps (ns.process.scrapper-allocine.actor-search
        (:require [net.cgrand.enlive-html :as html]
                  [glurps.config :as config]
                  [clojure.string :as str]))

(defn get-url-from-id [actor-name]
  (str (config/get :root-url) "/recherche/5/?q=" (str/replace actor-name " " "+")))

(defn fetch-url [actor-name]
  (let [url (get-url-from-id actor-name)]
    (html/html-resource (java.net.URL. url))))

(defn get-html-from-actor-name-or-html [actor-name-or-html]
  (if (instance? clojure.lang.LazySeq actor-name-or-html)
    actor-name-or-html
    (fetch-url actor-name-or-html)))

(defn cleanup [str]
  "Removes excess spaces at the beginning and end of the chain, as well as line
breaks"
  (-> (clojure.string/replace str #"\n" "")
      (clojure.string/replace #" +$" "")
      (clojure.string/replace #"^ +" "")))

(defn extract-id-from-url [url]
  (second (re-find #"cpersonne=([0-9]+).html" url)))

(defn get-field-url [actor-name-or-html]
  (let [html (get-html-from-actor-name-or-html actor-name-or-html)]
    (try (-> (html/select html [:div.colcontent :a])
             first
             :attrs
             :href)
         (catch Exception e
           ""))))

(defn get-field-id [actor-name-or-html]
  (let [url (get-field-url actor-name-or-html)]
    (try (-> (extract-id-from-url url))
         (catch Exception e
           ""))))

(defn get-actor-id-by-actor-name [actor-name-or-html]
  (get-field-id actor-name-or-html))

;; Tests
;; (def actor-name-or-html (fetch-url "francis lawrence"))
;; (def actor-name-or-html (fetch-url "Christopher Nolan"))

;; (get-field-url actor-name-or-html)
;; (get-field-id actor-name-or-html)
;; (get-actor-id-by-actor-name "Christopher Nolan")



;; (get-field-id "nolan")
;; (get-field-id (fetch-url "Christopher Nolan"))