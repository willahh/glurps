(ns glurps.admin.group.action
  (:require [ring.util.response :as response]
            [glurps.admin.group.setting :as setting]
            [glurps.admin.group.html :as html]
            [glurps.process.field.field :as field]
            [glurps.process.crud.update :as crud-update]
            [glurps.model.group.group-model :as group-model]
            [glurps.model.group.group-dao :as group-dao]
            [wlh.logger :as logger]))

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

(defn insert [session params state html-defn]
  (let [success (atom true)
        error-message (atom "")
        count (Integer. (:count params))]
    (dotimes [i count]
      (when (= @success true)
        (let [record-content (record-content-from-records-content params i)]
          (try (group-dao/insert record-content)
               (catch Exception e
                 (reset! success false)
                 (reset! error-message e))))))
    (if @success
      (response/redirect "../group")
      {:headers {"Content-Type" "text/html"}
       :body (html-defn session (assoc params :error-message @error-message) state)
       :session session})))

;; (insert {} {:count "3", :name ["a" "b" "c"] :descr ["desca" "descrb" "descrc"]} {} nil)
;; (insert {} {:count "1", :name ["a"] :descr ["desca"]} {} nil)

(defn update! [session params state html-defn]
  (let [success (atom true)
        error-message (atom "")
        count (if (:count params)
                (Integer. (:count params))
                1)]
    (dotimes [i count]
      (when (= @success true)
        (let [record-content
              (map-params-to-record-content (record-content-from-records-content params i)
                                            (:fields setting/list-conf))
              field-id (keyword (:field-id setting/list-conf))
              id (nth (field-id params) i)]
          (try (group-dao/update-record-properties record-content id)
               (catch Exception e
                 (reset! success false)
                 (reset! error-message e))))))
    (if @success
      (response/redirect "../../group")
      {:headers {"Content-Type" "text/html"}
       :body (html-defn session (assoc params :error-message @error-message) state)
       :session session})))

(defn delete [id]
  (let [id-list (clojure.string/split id #"-")]
    (doseq [id id-list]
      (group-dao/delete id)))
  (response/redirect "../../group/trash"))

(defn enable [id]
  (let [id-list (clojure.string/split id #"-")]
    (doseq [id id-list]
      (group-dao/enable id)))
  (response/redirect "../../group/trash"))

(defn disable [id]
  (let [id-list (clojure.string/split id #"-")]
    (doseq [id id-list]
      (group-dao/disable id)))
  (response/redirect "../../group"))

(defn duplicate [id]
  (response/redirect "../../group"))

(defn fav [id]
  (let [id-list (clojure.string/split id #"-")]
    (doseq [id id-list]
      (group-dao/fav id)))
  (response/redirect "../../group"))

(defn unfav [id]
  (let [id-list (clojure.string/split id #"-")]
    (doseq [id id-list]
      (group-dao/unfav id)))
  (response/redirect "../../group"))
