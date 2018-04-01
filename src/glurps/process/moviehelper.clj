(ns glurps.process.moviehelper)

(defn extract-id-from-sheet-url [url]
  (first (rest (re-find #"=([0-9]+).html" url))))

