(ns glurps.model.user-group.user-group-model)

(def fields '(^Integer id
              ^Integer user_id
              ^Integer group_id))

(defrecord User-group [^Integer id
                       ^Integer user_id
                       ^Integer group_id])

(defn get-fields []
  (into [] (map #(str %)) fields))

(defn make
  [{:keys [id user_id group_id]}]
  (->User-group id user_id group_id))
