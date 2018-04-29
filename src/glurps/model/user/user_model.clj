(ns glurps.model.user.user-model)

(def fields '(^Integer id
              ^String login
              ^String email
              ^String password
              ^String first_name
              ^String last_name))

(defrecord User [^Integer id
                 ^String login
                 ^String email
                 ^String password
                 ^String first_name
                 ^String last_name])

(defn get-fields []
  (into [] (map #(str %)) fields))

(defn make-user
  [{:keys [id login email password first_name last_name]}]
  (->User id login email password first_name last_name))
