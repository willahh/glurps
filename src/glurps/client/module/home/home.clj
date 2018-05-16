(ns glurps.client.module.home.home
  (:require [glurps.config :as config]
            [glurps.client.main :as main]))

(defn html []
  (main/client-page-html-wrapper {} {}
                                 [:div "home"]))
