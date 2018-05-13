(ns wlh.db-orientdb
  (:require [clojure.java.jdbc :as jdbc]
            [glurps.config :as config]
            [wlh.logger :as logger]
            [clj-odbp.core :as odbp]
            [clj-odbp.configure :as c]))

(c/configure-driver (config/get :odb-spec))

(def connection (odbp/db-open "glurps" "root" "root"))

(defn- bool-to-int [bool]
  (if bool 1 0))

(defn where-clause-to-str [clause]
  "Take a clause vector like [[\"enable = false\"] [\"and\"] [\"fav = false\"]]
  and return a sql string."
  (apply str (flatten 
              (if (> (count clause) 0)
                (into ["where "] (map (fn [v]
                                        [(str (first v) " ")]) clause)) 
                ""))))

(defn params-to-where-clause [params]
  (into [] (filter #(not (nil? %))) 
        (let [a (when (and (some? (:fav params)) (= (:fav params) "on"))
                  ["fav = true"])
              b (when (some? (:enable params))
                  [(str "enable = " (:enable params))])
              c (when (some? (:query params))
                  [(str "enable = " (:query params))])]
          [a
           (when (and (> (count a) 0) (> (count b) 0))
             ["and"])
           b])))

(defn clause-from-params [params]
  (apply str
         (flatten 
          (conj []
                (where-clause-to-str (params-to-where-clause params))
                (when (:order params)
                  (conj [] 
                        ["order by " (:order params) " "]
                        (if (= (:asc params) "1")
                          ["asc"] ["desc"])))))))

(defn query [query]
  (logger/info (str "[db]" query))
  (odbp/query-command connection query))

(defn find-record [class-name id]
  (logger/info (str "[db]find-record" class-name " " id))
  (first (odbp/query-command connection (str "select from " class-name " where @rid = " id))))

(defn update-record [class-name rid record-content]
  (logger/info (str "[db]update-record" class-name " " rid " " record-content))
  (odbp/record-update
   connection rid (conj {:_class class-name} record-content)))

(defn create-record [class-name record-content]
  (logger/info (str "[db]create-record" class-name " " record-content))
  (odbp/record-create connection (conj {:_class class-name
                                        :enable true} record-content)))

(defn delete-record [id]
  (logger/info (str "[db]delete-record" id))
  (odbp/record-delete connection (str "#" id)))







;; ;; ------------------- Some tests
;; (def where-clause-1 [["enable = false"] ["and"] ["fav = false"]])
;; (def where-clause-2 [["enable = false"]])

;; (params-to-where-clause {:fav "on" :active "on"})
;; (params-to-where-clause {:fav "on"})
;; (params-to-where-clause {})
;; (where-clause-to-str where-clause-1)
;; (where-clause-to-str where-clause-2)

;; (where-clause-to-str (params-to-where-clause {:fav "on" :active "on"}))
;; (where-clause-to-str (params-to-where-clause {:fav "on"}))
;; (where-clause-to-str (params-to-where-clause {}))
;; (where-clause-to-str (params-to-where-clause {}))

;; (clause-from-params {:fav "on" :active "on"})
;; (clause-from-params {:fav "on"})
;; (clause-from-params {})
;; (clause-from-params {:fav "on" :active "on" :order "name"})
;; (clause-from-params {:fav "on" :order "name"})
;; (clause-from-params {:order "name"})
;; (clause-from-params {:fav "on" :active "on" :order "name" :asc "1"})
;; (clause-from-params {:fav "on" :order "name" :asc "1"})
;; (clause-from-params {:order "name" :asc "1"})
