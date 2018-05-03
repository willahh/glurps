(ns glurps.client.module.asset.list
  (:require [reagent.core :as r]
            
            [glurps.client.main :as main]
            [glurps.component.card.card :as card]
            [ajax.core :refer [GET POST raw-response-format text-response-format]]
            ;; [clojure.browser.repl :as repl]
            [cljs.reader :as reader]
            ))

(defonce state (r/atom []))

(defn map-records-to-cards-html [records]
  (map (fn [v]
         {:image (:picture v)
          :title (:name v)
          :meta (:nationality v)}) records))

(defn vec-str-to-vec [vec-str]
  (reader/read-string vec-str))

(defn do-some-ajax []
  (GET "http://localhost:3000/asset/ajax/actor" 
       :handler 
       (fn [response] 
         (reset! state (map-records-to-cards-html (vec-str-to-vec response))))))

(defn simple-component []
  [:div
   [:p "The component below is shared between server and client... that's awesome !"]
   (card/cards-html @state)
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]
   [:div "Maybe some ajax ?"]
   [:button {:class "ui button" :on-click do-some-ajax} "Load some actors from database"]])

(defn home-page []
  [:div
   [:h2 "Welcome to Reagent2"]
   (simple-component)])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
