(ns glurps.admin.utils)

(def root-url "http://www.allocine.fr")

(defn extract-id-from-sheet-url [url]
  (first (rest (re-find #"=([0-9]+).html" url))))
