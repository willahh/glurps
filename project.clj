(defproject glurps "0.1.0-SNAPSHOT"
  :description "Glurps url"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [hiccup "1.0.5"]
                 [hickory "0.7.1"]
                 [enlive "1.1.6"]]
  :main ^:skip-aot glurps.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
