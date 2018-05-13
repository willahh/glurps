(ns glurps.model.country.country-model)

(def fields '(^Integer _rid
              ^Integer id
              ^String name
              ^String nicename
              ^Integer numcode
              ^Integer phonecode))

(defrecord Country [^Integer _rid
                    ^Integer id
                    ^String name
                    ^String nicename
                    ^Integer numcode
                    ^Integer phonecode])

(defn get-fields []
  (into [] (map #(str %)) fields))

(defn make
  [{:keys [_rid id name nicename numcode phonecode]}]
  (->Country _rid id name nicename numcode phonecode))
