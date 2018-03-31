(ns glurps.sheet
  (:require [net.cgrand.enlive-html :as html]
            [clojure.core.cache :as cache]))

(def root-url "http://www.allocine.fr")

(defn fetch-url [sheet-url]
  "sheet-url : /film/fichefilm_gen_cfilm=229831.html"
  (html/html-resource (java.net.URL. sheet-url)))

(defn get-field-description [resource-or-url]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    ((first (html/select resource [:div.synopsis-txt])) :content)))

(defn get-field-date [resource-or-url]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    ((first (html/select resource [:div.meta-body :span.date])) :content)))

(defn get-field-director [resource-or-url]
  (let [resource (if (instance? clojure.lang.LazySeq resource-or-url)
                   resource-or-url
                   (fetch-url (str root-url resource-or-url)))]
    ((first (html/select resource [:div.meta-body-item :a :span])) :content)))




;; TEST
(def sheet-url (fetch-url (str root-url "/film/fichefilm_gen_cfilm=229831.html")))
(get-field-description sheet-url)
(get-field-date sheet-url)
(get-field-director sheet-url)







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
