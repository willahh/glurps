(ns glurps.prod
  (:require
   [glurps.client.module.asset.list :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
