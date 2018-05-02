(ns glurps.client.module.asset.list
  (:require [reagent.core :as r]
            [glurps.client.main :as main]
            [glurps.component.card.card :as card]
            ;; [clojure.browser.repl :as repl]
            ))

(def records [{:image "http://fr.web.img5.acsta.net/c_215_290/pictures/15/07/10/15/28/007683.jpg"
               :title "Emmanuel Gillibert 2"
               }
              {:image "http://fr.web.img5.acsta.net/c_215_290/pictures/15/07/10/15/28/007683.jpg"
               :title "Emmanuel Gillibert 2"
               }])

(defn do-some-ajax []
  (js/console.log "do-some-ajax"))

(defn simple-component []
  [:div
   [:p "The component below is shared between server and client... that's awesome !"]
   (card/cards-html records)
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red "] "text."]
   [:div "Maybe some ajax ?"]
   [:button {:class "ui button" :on-click do-some-ajax} "Do some ajax please"]])

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
