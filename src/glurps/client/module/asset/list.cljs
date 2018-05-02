(ns glurps.client.module.asset.list
  (:require [reagent.core :as r]
            [glurps.client.main :as main]
            [glurps.component.card.card :as card]
            [ajax.core :refer [GET POST raw-response-format text-response-format]]
            ;; [clojure.browser.repl :as repl]
            ))

(def records [{:image "http://fr.web.img5.acsta.net/c_215_290/pictures/15/07/10/15/28/007683.jpg"
               :title "Emmanuel Gillibert 2"
               }
              {:image "http://fr.web.img5.acsta.net/c_215_290/pictures/15/07/10/15/28/007683.jpg"
               :title "Emmanuel Gillibert 2"
               }])

(def state (r/atom [{:birthdate "ok", :date_update "2018-01-10 16:10:20", :alloid 101001, :age 1, :fav 1, :name "John", :nationality "Fr", :active 1, :id 1, :picture "img", :order 1, :biography "", :date_create "2018-01-10 16:10:20", :filmography "", :job "Test 4"} ]))


(defn do-some-ajax []
  (js/console.log "do-some-ajax 2")
  (GET "http://localhost:3000/admin/asset/ajax/actor" 
       {:params {:a 0 :b 1}
        :response-format (raw-response-format)
        :ajax-success-handler (fn [response b c]
                                (reset! @state [])
                                (js/alert "ok")
                                ;; (reset! @state response)
                                ;; (js/console.log "response")
                                )}))

(defn simple-component []
  [:div
   [:p "The component below is shared between server and client... that's awesome !"]
   (card/cards-html @state)
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
