(ns glurps.admin.home
  (:require [net.cgrand.enlive-html :as html]
            [clojure.core.cache :as cache]
            [clojure.string :as str]
            [glurps.admin.utils]
            [glurps.sheet]))

(defn extract-id-from-sheet-url [url]
  (first (rest (re-find #"=([0-9]+).html" url))))

(def html-home (html/html-resource (java.net.URL. glurps.admin.utils/root-url)))

(defn get-sorties-week-id-list []
  (map #(extract-id-from-sheet-url ((% :attrs) :href))
       (html/select html-home
                    [:div.mdl-inside :div.roller-item :div.meta :a.meta-title-link])))

(defn get-sorties-week-sheets []
  (map #(glurps.sheet/get-fields-from-id %) (get-sorties-week-id-list)))
