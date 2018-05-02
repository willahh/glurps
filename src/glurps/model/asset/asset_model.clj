(ns glurps.model.user.asset-model)

(def fields '(^Integer id
              ^Integer active
              ^String date_create
              ^String date_update
              ^String type
              ^String file_name
              ^Integer size
              ^Integer width
              ^Integer height
              ^String title
              ^String description))

(defrecord Asset [^Integer id
                  ^Integer active
                  ^String date_create
                  ^String date_update
                  ^String type
                  ^String file_name
                  ^Integer size
                  ^Integer width
                  ^Integer height
                  ^String title
                  ^String description])

(defn get-fields []
  (into [] (map #(str %)) fields))

(def table-name "asset")

(defn make
  [{:keys [id active date_create date_update type file_name size width height title description]}]
  (->Asset id active date_create date_update type file_name size width height title description))
