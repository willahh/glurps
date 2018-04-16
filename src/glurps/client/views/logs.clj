(ns glurps.client.views.logs
  (:require [glurps.config :as config]
            [glurps.client.views.main :as main]
            [wlh.logger :as logger]))

(def filepath "resources/log.log")

(defn get-logger-lines []
  (logger/read-lines-from-to filepath 2 5 :output "html"))

(def get-logger-lines-memoized
  "Memoize (cached) version of get-logger-lines" (memoize get-logger-lines))

(defn get-html []
  (logger/info "get-html 1")
  (main/get-html [:div
                  [:h2 "Logs"]
                  [:div.row
                   [:div.col
                    (get-logger-lines)]]]))