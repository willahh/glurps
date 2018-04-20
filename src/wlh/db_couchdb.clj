(ns wlh.db-couchdb
  (:require [com.ashafa.clutch :as clutch])
  (:use [com.ashafa.clutch]))





(def db-name "test")
(def db (cemerick.url/url "http://127.0.0.1:5984/" db-name))
(get-database db-name)  ;; creates database if it's not available yet



;; Update
(conj! db {:_id "yo" :b "ok" :c "c"})

;; Get
(get-in db ["yo"])











(clutch/update-in! db ["ID" :key :key array-index] assoc :key y)
(clutch/update-document [{:a "ok"}])



(get-in db ["201"])

(assoc! db :a {:group "Group a 2"})
(get-in db ["a"])



(def db (couch "test"))
(create! db)
(:result (meta *1))
(reduce conj! db (for [x (range 200 300)]
                   {:_id (str x) :a [1 2 x]}))

(get-in db ["201" :a 2])

(conj! db {:_id "a" :yo "o"})



(get-in db ["b"])
(assoc! db :b {:test "test"})
(assoc! db :foo {:a 6 :b 7})
(get-in db ["foo" :test-grade])

bulk-update "clutch_example" [{:test-grade 11 :_id "foo"}
                              {:test-grade 20}
                              {:test-grade 30}])


(dissoc! db "b")
(get-in db ["b"])






(get-in db ["b"])



















(get-in db ["1"])

(defn load-record
  [id]
  {:body (get-in (db) [id])})

(defn save-record
  [data]
  (let [id (get-in data ["_id"])]
    (clutch/assoc! (db) id data)
    {:body (get-in (db) [id])}))


(save-record {:_id "test"
              :users [{:name "Will" :age 32}]})

(clutch/assoc! )
(:result (meta *1))
(count db)
db




(get-in (db) [id])

(clutch/update-document db "test-grade" {:test "eu"})

(bulk-update db [{:user "will2" :_id "2"}])
(put-document db {:a 5 :b [0 6]})
(bulk-update db [{:user "Will3" :_id "ok"}])

(bulk-update db [{:test-grade 10 :_id "foo"}
                 {:test-grade 20}
                 {:test-grade 30}])

(with-db "test"
  (put-document {:_id "a" :a 5})
  (put-document {:_id "b" :b 6}))

(get-in db ["68" :a 2])

