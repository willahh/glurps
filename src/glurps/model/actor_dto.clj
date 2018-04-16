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
