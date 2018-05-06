(ns glurps.model.group.group-model)

(def fields '(^Integer id
              ^Integer active
              ^String name))

(defrecord Group [^Integer id
                  ^Integer active
                  ^String name])

(defn get-fields []
  (into [] (map #(str %)) fields))

(defn make
  [{:keys [id active name]}]
  (->Group id active name))
