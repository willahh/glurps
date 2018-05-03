(ns glurps.client.module.asset.list
  (:require [glurps.client.main :as main]))


(defn html [{:keys [params session] :as query}]
  (main/wrapper-html
   [:div {:id "app"}
    [:script {:src "/js/out/goog/base.js"}]
    [:script {:src "/js/out/cljs_deps.js"}]
    [:script {:src "/js/app.js"}]]))
