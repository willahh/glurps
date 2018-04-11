(ns glurps.process.scrapper-allocine.update-actor
  (:require [glurps.model.actor :as model-actor]
            [glurps.process.scrapper-allocine.actor :as scrapper-actor]
            [glurps.process.scrapper-allocine.actor-search :as scrapper-actor-search]))

(defn insert-actor [actorid]
  (let [row-data (scrapper-actor/get-row-from-id actorid)]
    (model-actor/insert {:alloid actorid
                         :name (:name row-data)
                         :job "TODO"
                         :nationality (:nationality row-data)
                         :age (:age row-data)
                         :birthdate (:birthdate row-data)
                         :biography (:biography row-data)
                         :filmography (:filmography row-data)
                         :picture (:picture row-data)})))
;; (let [actor-id (scrapper-actor-search/get-actor-id-by-actor-name "Olivia Cooke")]
;;   (insert-actor actor-id))
