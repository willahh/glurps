(defproject glurps "Glurps 0.1.0"
  :description "Glurps url"
  :url "https://github.com/willahh/glurps"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [hiccup "1.0.5"]
                 [hickory "0.7.1"]
                 [enlive "1.1.6"]
                 [org.clojure/core.cache "0.7.1"]
                 [compojure "1.6.0"]
                 [ring "1.6.3"]
                 [org.clojure/java.jdbc "0.7.5"]
                 [sqlitejdbc "0.5.6"]
                 [org.clojure/test.check "0.9.0"]
                 [org.clojure/test.generative "0.5.2"]
                 [prone "1.5.1"]]
  :main ^:skip-aot glurps.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:ring {:stacktrace-middleware prone.middleware/wrap-exceptions}
                   :dependencies [[org.clojure/test.check "0.9.0"]]}}
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler glurps.client.routes/app})
