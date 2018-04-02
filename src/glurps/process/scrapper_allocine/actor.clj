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


;; Test
(def id-or-html (fetch-url "18940"))
;; (def id-or-html "229831")

(get-field-name id-or-html)
(get-field-job id-or-html)
(get-field-nationality id-or-html)
(get-field-birthdate id-or-html)
(get-field-age id-or-html)
(get-field-filmography id-or-html)
(get-field-picture id-or-html)












(defn get-field-from-resource [id-or-html selector]
  (let [html (get-html-from-id-or-html id-or-html)]
    (first ((first (html/select html selector)) :content))))

(defn get-field-description [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (first ((first (html/select html [:div.titlebar-title])) :content))))

(defn get-field-title [id-or-html]
  (get-field-from-resource id-or-html [:div.titlebar-title]))

(defn get-field-id [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (let [movie-id-str (((first (html/select html [:span#js-title-actions])) :attrs) :data-entity-id)]
      (clojure.string/replace movie-id-str #"Movie_" ""))))

(defn get-field-date ([id-or-html]
                      (get-field-from-resource id-or-html [:div.meta-body :span.date])))

(defn get-field-director [id-or-html]
  (get-field-from-resource id-or-html [:div.meta-body-item :a :span]))

(defn get-field-actors [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (into [] (map #(first (% :content))        
                  (html/select html [:div.meta :a.meta-title-link (html/attr? :itemprop)])))))

(defn get-field-genre [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (into [] (map #(first (% :content))        
                  (html/select html [:div.meta :div.meta-body-item (html/attr-has :itemprop "genre")])))))

(defn get-field-image [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (((first (html/select html [:div.card-movie-overview :img.thumbnail-img])) :attrs) :src)))

(defn get-field-note-presse [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (let [note (clojure.string/replace (first
                                        ((first (html/select html
                                                             [:span.stareval-note])) :content))
                                       #"\n +"
                                       "")
          note-double (str-double-to-double note)]
      (/ note-double 5))))

(defn get-field-note-spectator [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    (let [note (clojure.string/replace (first
                                        ((second (html/select html
                                                              [:span.stareval-note])) :content))
                                       #"\n +"
                                       "")
          note-double (str-double-to-double note)]
      (/ note-double 5))))

(defn get-fields-from-id [id-or-html]
  (let [html (get-html-from-id-or-html id-or-html)]
    {:id (get-field-id html)
     :title (get-field-title html)
     :description (get-field-description html)
     :date (get-field-date html)
     :director (get-field-director html)
     :actors (get-field-actors html)
     :genre (get-field-genre html)
     :image (get-field-image html)
     :note {:presse (get-field-note-presse html)
            :spectator (get-field-note-spectator html)}}))

;; ;; -------- Test
;; (def id-or-html (fetch-url "229831"))
;; ;; (def id-or-html "229831")

;; (get-fields-from-id id-or-html)
;; (get-field-id id-or-html)
;; (get-field-title id-or-html)
;; (get-field-description id-or-html)
;; (get-field-date id-or-html)
;; (get-field-director id-or-html)
;; (get-field-actors id-or-html)
;; (get-field-genre id-or-html)
;; (get-field-image id-or-html)
