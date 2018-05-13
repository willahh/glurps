(ns glurps.model.group.group-model)

(def fields '(^Integer _rid
              ^String name))

(defrecord Group [^Integer _rid
                  ^String name])

(defn get-fields []
  (into [] (map #(str %)) fields))

(defn make
  [{:keys [_rid name]}]
  (->Group _rid name))
