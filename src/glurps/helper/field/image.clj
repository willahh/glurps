(ns glurps.helper.field.image
  (:require [glurps.config :as config]
            [wlh.logger :as logger]
            [clj-http.client :as client]))

(defn extract-image-from-url [upload-filepath url image-name]
  (let [url (try (java.net.URL. url)
                 (catch Exception e nil))]
    (if url
      (clojure.java.io/copy
       (:body (client/get url {:as :stream}))
       (java.io.File. (str upload-filepath image-name)))
      (do (logger/warn "url not valid, return a default image"
                       {:upload-filepath upload-filepath
                        :url url
                        :image-name image-name})
          nil))))

(defn get-default-image-path []
  (str (config/get :upload-path) "default.png"))

(defn get-image [image-name url]
  (let [filepath (str (config/get :upload-filepath)
                      image-name)
        image-out (atom (str (config/get :upload-path) image-name))]
    (when-not (.exists (clojure.java.io/as-file filepath))
      (let [image (extract-image-from-url (config/get :upload-filepath)
                                          url
                                          image-name)]
        (reset! image-out
                (if image image (get-default-image-path)))))

    @image-out))

(defn get-html [record]
  (let [image-name (str "actor_" (record :id) ".jpg")
        url (str (config/get :upload-filepath) image-name)]
    [:img {:src (get-image image-name url)
           :style "max-width: 100px; max-height: 100px;"}]))

(defn get-update-html [field-name record & field-conf]
  (let [image-name (str "actor_" (record :id) ".jpg")
        url (str (config/get :upload-filepath) image-name)]
    [:div
     [:div [:img {:src (get-image image-name url)
                  :style "max-width: 100px; max-height: 100px;"}]]
     [:div [:input {:name field-name :id field-name :value (record (keyword field-name))}]]]))
