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
                 [ring/ring-defaults "0.3.1"]
                 [org.clojure/java.jdbc "0.7.5"]
                 [org.clojure/test.check "0.9.0"]
                 [org.clojure/test.generative "0.5.2"]
                 [prone "1.5.1"]
                 [clj-http "3.8.0"]                 
                 [sqlitejdbc "0.5.6"]
                 [honeysql "0.9.2"]
                 [ring-anti-forgery "0.3.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [reagent "0.8.0"]
                 [hiccups "0.3.0"]
                 [cljs-ajax "0.7.3"]
                 [jayq "2.5.5"]]
  :main ^:skip-aot glurps.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}
             :dev {:ring {:stacktrace-middleware prone.middleware/wrap-exceptions}
                   :source-paths ["src" "env/dev/clj"]
                   :dependencies [[org.clojure/test.check "0.9.0"]
                                  [binaryage/devtools "0.9.7"]
                                  [figwheel-sidecar "0.5.15"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [com.cemerick/piggieback "0.2.2"]]}}
  
  :plugins [[lein-ring "0.9.7"]
            [lein-figwheel "0.5.15"]]
  :ring {:handler glurps.routes/app
         :init glurps.routes/init}
  
  ;; Clojurescript config
  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  ;; :resource-paths ["resources/public"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
             :css-dirs ["resources/public/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "glurps.dev"
                         :output-to "resources/public/js/app.js"
                         :output-dir "resources/public/js/out"
                         :asset-path   "js/out"
                         :source-map true
                         :optimizations :none
                         :pretty-print  true}
                        :figwheel
                        {:on-jsload "glurps.client.module.asset.list/mount-root"
                         :open-urls ["http://localhost:3449/index.html"]}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:output-to "resources/public/js/app.js"
                         :output-dir "resources/public/js/release"
                         :asset-path   "js/out"
                         :optimizations :advanced
                         :pretty-print false}}}}

  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]})
