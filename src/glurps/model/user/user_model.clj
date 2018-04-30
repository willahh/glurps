(ns glurps.model.user.user-model)

(def fields '(^Integer id
              ^Integer active
              ^String date_create
              ^String date_update
              ^String login
              ^String email
              ^String password
              ^String first_name
              ^String last_name))

(defrecord User [^Integer id
                 ^Integer active
                 ^String date_create
                 ^String date_update
                 ^String login
                 ^String email
                 ^String password
                 ^String first_name
                 ^String last_name])

(defn get-fields []
  (into [] (map #(str %)) fields))

(defn make-user
  [{:keys [id active date_create date_update login email password first_name last_name]}]
  (->User id active date_create date_update login email password first_name last_name))
