(ns glurps.admin.user.action
  (:require [ring.util.response :as response]
            [glurps.admin.user.setting :as setting]
            [glurps.admin.user.html :as html]
            [glurps.admin.user.helper :as user-helper]
            [glurps.process.field.field :as field]
            [glurps.process.crud.update :as crud-update]            
            [glurps.model.user.user-dao :as user-dao]
            [wlh.logger :as logger]))

(defn insert [session params state html-defn]
  (let [success (atom true)
        error-message (atom "")
        count (Integer. (:count params))]
    (dotimes [i count]
      (when (= @success true)
        (let [record-content (user-helper/record-content-from-records-content params i)]
          (try (user-dao/insert record-content)
               (catch Exception e
                 (reset! success false)
                 (reset! error-message e))))))
    (if @success
      (response/redirect "../user")
      {:headers {"Content-Type" "text/html"}
       :body (html-defn session (assoc params :error-message @error-message) state)
       :session session})))

(defn update! [session params state html-defn]
  (logger/info "update!" "session: " session " params: " params " state: " state)
  (let [success (atom true)
        error-message (atom "")
        count (if (:count params)
                (Integer. (:count params))
                1)]
    (dotimes [i count]
      (when (= @success true)
        (let [record-content
              (user-helper/map-params-to-record-content (user-helper/record-content-from-records-content params i)
                                                        (:fields setting/list-conf))
              field-id (keyword (:field-id setting/list-conf))
              id (nth (field-id params) i)]
          (try (user-dao/update-record-properties record-content id)
               (catch Exception e
                 (reset! success false)
                 (reset! error-message e))))))
    (if @success
      (response/redirect "../../user")
      {:headers {"Content-Type" "text/html"}
       :body (html-defn session (assoc params :error-message @error-message) state)
       :session session})))

(defn action-batch [id field-content redirect-url]
  (let [id-list (clojure.string/split id #"-")]
    (doseq [id id-list]
      (user-dao/update-record-properties field-content id)))
  (response/redirect redirect-url))

(defn delete [id]
  (let [id-list (clojure.string/split id #"-")]
    (doseq [id id-list]
      (user-dao/delete id)))
  (response/redirect "../../user/trash"))

(defn duplicate [id]
  (response/redirect "../../user"))
