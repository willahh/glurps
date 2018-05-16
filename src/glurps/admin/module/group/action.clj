(ns glurps.admin.module.group.action
  (:require [ring.util.response :as response]
            [glurps.admin.module.group.setting :as setting]
            [glurps.admin.module.group.html :as html]
            [glurps.admin.module.group.helper :as group-helper]
            [glurps.process.field.field :as field]
            [glurps.process.crud.update :as crud-update]            
            [glurps.model.group.group-dao :as group-dao]
            [wlh.logger :as logger]))

(defn insert [session params state html-defn]
  (let [success (atom true)
        error-message (atom "")
        count (Integer. (:count params))]
    (dotimes [i count]
      (when (= @success true)
        (let [record-content (group-helper/record-content-from-records-content params i)]
          (try (group-dao/insert record-content)
               (catch Exception e
                 (reset! success false)
                 (reset! error-message e))))))
    (if @success
      (response/redirect "../group")
      {:headers {"Content-Type" "text/html"}
       :body (html-defn session (assoc params :error-message @error-message) state)
       :session session})))

(defn update! [session params state html-defn]
  (logger/info "update!" session params state html-defn)
  (let [success (atom true)
        error-message (atom "")
        count (if (:count params)
                (Integer. (:count params))
                1)]
    (dotimes [i count]
      (when (= @success true)
        (let [record-content
              (group-helper/map-params-to-record-content (group-helper/record-content-from-records-content params i)
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

(defn action-batch [id field-content redirect-url]
  (let [id-list (clojure.string/split id #"-")
        success (atom true)
        error-message (atom "")]
    (doseq [id id-list]
      (try (group-dao/update-record-properties field-content id)
           (catch Exception e
             (reset! success false)
             (reset! error-message e))))
    (if @success
      (response/redirect redirect-url)
      (str "error: " error-message))))

(defn delete [id]
  (let [id-list (clojure.string/split id #"-")]
    (doseq [id id-list]
      (group-dao/delete id)))
  (response/redirect "../../group/trash"))

(defn duplicate [id]
  (response/redirect "../../group"))
