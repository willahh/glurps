(ns glurps.model.abstract-dao)

(defprotocol IDAO
  (get-list [params offset limit]))

(deftype AbstractDAO []
  IDAO
  (get-list [params offset limit]
    ["yo"]))


;; (def test (AbstractDAO.))
;; (AbstractDAO. (get-list 1 2 3))

;; (.get-list (AbstractDAO.) 1 2 3)