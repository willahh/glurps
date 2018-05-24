(ns glurps.model.abstract-dao)

(defprotocol MyDAO
  (get-list [this] [this params] [this offset] [this limit]))

;; (deftype AbstractDAO []
;;   IDAO
;;   (get-list [params offset limit]
;;     ["yo"]))

(deftype AbstractDAOClassType2 []
  MyDAO
  (get-list [this params offset limit]
    "ok"))

;; (defrecord AbstractDAOClass [] IDAO
;;            (get-list [params offset limit]
;;              [params offset limit]))


(def obj (AbstractDAOClassType.))

(get-list obj {} 1 2)



;; (def test (AbstractDAO.))
;; (AbstractDAO. (get-list 1 2 3))

;; (.get-list (AbstractDAO.) 1 2 3)


























;; Interface
(defprotocol MyInterface 
  (foo [this]) ; `this` is required to let the interface refer to the class
  (bar [this] [this x] [this x y] [this x y z])) ; multi-arity method signature defined

;; `deftype` dynamically generates compiled bytecode for the specified identifier (e.g. MyClass)
(deftype MyClass [a b c]
  MyInterface ; implement the specified protocol (i.e. interface)
  
  ;; each function's scope is defined by 
  ;; the object provided as the first argument
  ;; i.e. something that is of the `MyClass` type
  (foo [this] a)
  (bar [this] b)
  (bar [this x] (+ c x))
  (bar [this x y] (+ c x y))
  (bar [this x y z] (+ c x y z)))

(def obj (MyClass. 1 2 3))

(foo obj)
(bar obj)
(bar obj 1)
(bar obj 1 2)
(bar obj 1 2 3)