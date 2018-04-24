(ns glurps.process.html.html)

(defn- get-url [url id]
  (clojure.string/replace url #"\{id\}" (str id)))

(defn get-action-html [field-id urls id]
  [:div {:class "action" :style "white-space: nowrap;"}
   (map (fn [url]
          [:a {:href (get-url (:url url) id) :class "btn"} (:name url)]) urls)])
