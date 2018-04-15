(ns glurps.model.actor-dto)

(def fields '(^Integer id
              ^Integer alloid
              ^String name
              ^String job
              ^String nationality
              ^Integer age
              ^String birthdate
              ^String biography
              ^String filmography
              ^String picture))

(defrecord Actor [^Integer id
                  ^Integer alloid
                  ^String name
                  ^String job
                  ^String nationality
                  ^Integer age
                  ^String birthdate
                  ^String biography
                  ^String filmography
                  ^String picture])

(defn get-fields []
  (into [] (map #(str %) fields)))

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

(defn make-actor
  [{:keys [id alloid name job nationality age birthdate biography filmography picture]}]
  {:pre [(integer? alloid)
         (string? name)
         (string? job)
         (string? nationality)
         (int? age)
         (valid-birthdate? birthdate)
         (valid-filmography? filmography)
         (valid-picture? picture)]}
  (->Actor id alloid name job nationality age birthdate biography filmography picture))
