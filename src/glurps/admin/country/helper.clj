(ns glurps.admin.country.helper
  (:require [glurps.admin.country.setting :as setting]
            [glurps.process.field.field :as field]))

(defn map-page-params [session params default-params]
  (into {} (map (fn [m]
                  (let [k (first m)
                        v (cond (some? (k params)) (k params)
                                (some? (k session)) (k session)
                                (some? (k default-params)) (k default-params))] 
                    {(keyword k) v})) default-params)))

(defn handle-route [session params body-defn]
  (let [default-params (:default-params setting/list-conf)
        state (map-page-params session params default-params)
        session (merge session state)]
    {:headers {"Content-Type" "text/html"}
     :body (body-defn session params state)
     :session session}))

(defn map-params-to-record-content [params fields]
  (into {} (map (fn [m]
                  (let [k (keyword (:name m))
                        v (k params)
                        type (:type m)]
                    (when v {k (field/format-value-for-insert type v)})))
                fields)))

(defn record-content-from-records-content [params i]
  (into {} (map (fn [m]
                  (when (not= (first m) :count)
                    (let [k (keyword (first m))
                          v (nth (first (rest m)) i)]
                      {k v})))
                params)))
