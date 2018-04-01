(ns glurps.sheet
  (:require [net.cgrand.enlive-html :as html]
            [clojure.core.cache :as cache]))

(def root-url "http://www.allocine.fr")

(defn clean-string [str]
  "Removes excess spaces at the beginning and end of the chain, as well as line
breaks"
  (clojure.string/replace
   (clojure.string/replace (clojure.string/replace str #"^ +" "")
                           #" +$" "") #"\n" ""))
(defn str-double-to-double [str]
  (read-string (clojure.string/replace "4,2" #"," ".")))

(defn fetch-url [sheet-url]
  "sheet-url : /film/fichefilm_gen_cfilm=229831.html"
  (html/html-resource (java.net.URL. sheet-url)))

(defn get-field-from-resource [resource-or-url selector]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    (first ((first (html/select resource selector)) :content))))

(defn get-field-description [resource-or-url]
  (get-field-from-resource resource-or-url [:div.synopsis-txt]))

(defn get-field-id [resource-or-url]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    (let [movie-id-str (((first (html/select resource-or-url [:span#js-title-actions])) :attrs) :data-entity-id)]
      (clojure.string/replace movie-id-str #"Movie_" ""))))

(defn get-field-date ([resource-or-url]
                      (get-field-from-resource resource-or-url [:div.meta-body :span.date])))

(defn get-field-director [resource-or-url]
  (get-field-from-resource resource-or-url [:div.meta-body-item :a :span]))

(defn get-field-actors [resource-or-url]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    (map #(first (% :content))        
         (html/select resource-or-url [:div.meta :a.meta-title-link (html/attr? :itemprop)]))))

(defn get-field-genre [resource-or-url]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    (map #(first (% :content))        
         (html/select resource-or-url [:div.meta :div.meta-body-item (html/attr-has :itemprop "genre")]))))

(defn get-field-image [resource-or-url]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    (((first (html/select resource-or-url [:div.card-movie-overview :img.thumbnail-img])) :attrs) :src)))

(defn get-field-note-presse [resource-or-url]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    (let [note (clojure.string/replace (first
                                        ((first (html/select resource-or-url
                                                             [:span.stareval-note])) :content))
                                       #"\n +"
                                       "")
          note-double (str-double-to-double note)]
      (/ note-double 5))))

(defn get-field-note-spectator [resource-or-url]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    (let [note (clojure.string/replace (first
                                        ((second (html/select resource-or-url
                                                              [:span.stareval-note])) :content))
                                       #"\n +"
                                       "")
          note-double (str-double-to-double note)]
      (/ note-double 5))))

;; (defmacro get-field-macro [resource-or-url & body]
;;   `(let [resource# ~(if (instance? clojure.lang.LazySeq ~resource-or-url)
;;                       resource-or-url
;;                       (fetch-url (str root-url resource-or-url)))]
;;      body))

;; (get-field-macro resource-or-url (map #(first (% :content))
;;                                       (html/select
;;                                        resource-or-url
;;                                        [:div.meta :div.meta-body-item
;;                                         (html/attr-has :itemprop "genre")])))

(defn get-fields [resource-or-url]
  {:id (get-field-id resource-or-url)
   :description (get-field-description resource-or-url)
   :date (get-field-date resource-or-url)
   :director (get-field-director resource-or-url)
   :actors (get-field-actors resource-or-url)
   :genre (get-field-genre resource-or-url)
   :image (get-field-image resource-or-url)
   :note {:presse (get-field-note-presse resource-or-url)
          :spectator (get-field-note-spectator resource-or-url)}})


;; TEST
(def resource-or-url (fetch-url (str root-url "/film/fichefilm_gen_cfilm=229831.html")))
(get-field-description resource-or-url)
(get-field-date resource-or-url)
(get-field-director resource-or-url)
(get-field-actors resource-or-url)
(get-fields resource-or-url)




;; (let [a "ok"]
;;   (println "ok")
;;   (future (Thread/sleep 500) (println "-- done"))
;;   (println "ok"))




;; (def C (-> {:a 1 :b 2}
;;            (cache/fifo-cache-factory :threshold 2)
;;            (cache/ttl-cache-factory  :ttl 5000)))

;; (assoc C :d 138)






;; (let [f (future (reduce * (range 1 50)))]
;;   (.get f 1 java.util.concurrent.TimeUnit/MILLISECONDS))



;; (defn timeout [timeout-ms callback]
;;   (let [fut (future (callback))
;;         ret (deref fut timeout-ms ::timed-out)]
;;     (when (= ret ::timed-out)
;;       (future-cancel fut))
;;     ret))

;; (timeout 100 #(Thread/sleep 1000))
