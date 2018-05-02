(ns ^:figwheel-no-load glurps.dev
  (:require
   [glurps.client.module.asset.list :as core]
   [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
