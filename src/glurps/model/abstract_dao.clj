(ns glurps.model.abstract-dao
  (:use [korma.core])
  (:require 
   [glurps.model.schema :as schema]
   [glurps.process.db.db :refer [select-from-params]]))

;; (defn get-abstract [] "get abstract")

;; (defmacro get-list [params]
;;   `(select-from-params schema params))

;; Some test
(select-from-params schema/glu-group {})
(select-from-params schema/glu-group {:fav "on"})
(select-from-params schema/glu-group {:fav "on" :active "on" :order "group_id" :asc "0" :limit 2 :offset 0})
(select-from-params schema/glu-group {:fav "on" :active "on" :order "name"})
(select-from-params schema/glu-group {:fav "on" :active "on" :order "group_id" :asc "1"})
(select-from-params schema/glu-group {:fav "on" :active "on" :order "name" :asc "1" :limit 2 :offset 1})
(select-from-params schema/glu-group {:fav "on" :active "on" :order "create_date" :asc "1" :limit 2 :offset 1})
(select-from-params schema/glu-group {:fav "on" :active "on" :order "name" :asc "1" :limit 2 :offset 1})



;; (defmacro test [params]
;;   `(~list a))

;; (macroexpand-1 '(test "a"))

;; (test "a")

;; (defprotocol IAbstractDAO
;;   (get-abstract [this params])
;;   (get-list [this] [this params])
;;   (find-by-id [this] [this id]))

;; (defprotocol IGroupDAO
;;   (get-list [this] [this params])
;;   (find-by-id [this] [this id]))

;; (deftype AbstractDAO []
;;   IAbstractDAO
;;   (get-abstract [this params]
;;     "abstract")
;;   (get-list [this params]
;;     "liiiiists")
;;   (find-by-id [this params]
;;     "ae"))

;; (deftype GroupDAO []
;;   IGroupDAO
;;   (get-list [this params] 
;;     "a"))

;; (defrecord GroupDAORecord [a])

;; (extend-type GroupDAORecord )

;; (get-list (GroupDAO.) "a")
;; (get-abstract (GroupDAO.) "a")




;; (get-list (->AbstractDAO) "a")
;; (get-list (->GroupDAO) "A")

;; (find-by-id (->GroupDAO) "A")
;; (find-by-id (AbstractDAO.) "A")
;; (find-by-id (GroupDAO.) "A")


;; TODO :
;;  - Une interface IAbstractDAO : ok,
;;  - Une classe AbstractDAO : ok
;;  - Une classe GroupDAO : ok
;;  - Etendre la classe GroupDAO a la classe AbstractDAO
;;
;;
;;
;; (defprotocol IGroupDAO
;;   (get-yop [this params]))

;; (deftype GroupDAO []
;;   IGroupDAO
;;   (get-yop [this params] "ok"))

;; (extend-protocol IAbstractDAO GroupDAO)


;; (get-yop (->GroupDAO) "a")













;; (defrecord AbstractDAORecord []
;;   )

;; (defrecord AbstractDAOClass []
;;   IAbstractDAO
;;   (get-list 
;;     [this] 
;;     (select-from-params schema/glu-group params)))

;; (get-list (->AbstractDAO) "a")



;; (extend AbstractDAO 
;;   {:foo (fn [] "foo")})

;; (def test (extend AbstractDAO GroupDAO))


;; (get-list test "ok")

;; (get-list (->AbstractDAO) "a")












;; (defrecord TestRecord []
;;   AbstractDAO
;;   (get-list [this] "ok"))

;; (gen-interface :name I1
;;                :extends [glurps.model.abstract-dao/AbstractDAO]
;;                :methods [ 
;;                          [m1 [Object Int32] String]             ; normal
;;                          [m2 [Object (by-ref Int32)] String]    ; taking a by-ref parameter
;;                          ])







;; (extend AbstractDAO 
;;   {:yo (fn [this]
;;          "yo")})

;; (def test (->AbstractDAO))

;; (.get-list test "a")

;; (extend-type AbstractDAO )


;; (get-list (AbstractDAO.) "a")
