(ns glurps.config.config-edn)

(def data {:root-url "http://www.allocine.fr"
           :root-path "http://localhost:3000/glurps/"
           :upload-filepath "/Users/willahh/www/projects/clojure/glurps/src/glurps/upload/"
           :upload-path "http://localhost/projects/clojure/glurps/upload/"
           :root-filepath "/Users/willahh/www/projects/clojure/glurps/src/glurps/"
           
           ;; db
           :db-spec {:classname "org.sqlite.JDBC"
                     :subprotocol "sqlite"
                     :subname "/Users/willahh/www/projects/clojure/glurps/resources/databases/allocine.db"}
           :odb-spec {:host "localhost"
                      :port 2424
                      :log-file "log/clj_odbp.log"
                      :log-level :fatal}
           :db-name "/Users/willahh/www/projects/clojure/glurps/resources/databases/allocine.db"
           :database-manager-url "http://localhost:2480/studio/index.html#/database/glurps/browse"})
