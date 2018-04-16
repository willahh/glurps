(ns glurps.model.actor-form
  (:require [glurps.model.actor-dto :as actor-dto]))

(defn valid-birthdate? [value]
  (and (= (type value) java.lang.String)
       (some? value)
       (not-empty value)))

(defn valid-filmography? [value]
  (and (= (type value) java.lang.String)
       (some? value)
       (not-empty value)))

(defn valid-picture? [value]
  (and (= (type value) java.lang.String)
       (some? value)
       (not-empty value)))

(defn validate [params]
  (let [fields
        {:alloid (Integer. (params :alloid))
         :name (params :name)
         :job (params :job)
         :nationality (params :nationality)
         :age (Integer. (params :age))
         :birthdate (params :birthdate)
         :picture (params :picture)}]
    (cond
      (integer? (fields :alloid)) "ok"
      (string? (fields :name)) "ok"
      )))

(when true true false)

(if false "ok" ())
(if true "ok2" "ko2")



(defn make
  [{:keys [id alloid name job nationality age birthdate biography filmography picture]}]
  {:pre [(integer? alloid)
         (string? name)
         (string? job)
         (string? nationality)
         (int? age)
         (valid-birthdate? birthdate)]}
  (actor-dto/->Actor id alloid name job nationality age birthdate biography filmography picture))