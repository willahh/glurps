(ns glurps.process.image
  (:require [clj-http.client :as client]))

(defn get-dir []
  "upload/")

(defn extract-image-from-url [url path]
  (clojure.java.io/copy
   (:body (client/get url {:as :stream}))
   (java.io.File. (str (get-dir) path))))
