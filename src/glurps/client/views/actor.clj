(ns glurps.client.views.actor
  (:require [glurps.config :as config]
            [glurps.client.views.main :as main]
            [ring.util.anti-forgery :refer [anti-forgery-field]]))


(defn get-html [& data]
  (main/get-html [:div.row
                  [:div
                   [:h2 "Actors"]
                   [:div (pr-str data)]
                   [:button {:class "btn"} "Insert new actor"]
                   [:form {:action "/actor" :method "POST"}
                    (anti-forgery-field)
                    [:table
                     [:tr
                      [:td {:class "label"} "alloid"]
                      [:td {:class "value"} [:input {:name "alloid"}]]]
                     [:tr
                      [:td {:class "label"} "name"]
                      [:td {:class "value"} [:input {:name "name"}]]]
                     [:tr 
                      [:td {:class "label"} "nationality"]
                      [:td {:class "value"} [:input {:name "nationality"}]]
                      ]
                     [:tr
                      [:td {:class "label"} "age"]
                      [:td {:class "value"} [:input {:name "age"}]]]
                     [:tr
                      [:td {:class "birthdate"} "birthdate"]
                      [:td {:class "value"} [:input {:name "birthdate"}]]
                      ]
                     [:tr
                      [:td {:class "filmography"} "filmography"]
                      [:td {:class "value"} [:input {:name "filmography"}]]]
                     [:tr
                      [:td {:class "picture"} "picture"]
                      [:td {:class "value"} [:input {:name "picture"}]]]
                     ]
                    [:input {:type "submit"}]]]]))
