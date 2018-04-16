(ns glurps.admin.actor.update
  (:require [glurps.config :as config]
            [glurps.admin.main :as main]
            [glurps.helper.field.image :as field-image]
            [glurps.helper.crud.update :as crud-update]
            [glurps.model.actor-dao :as actor-dao]
            [glurps.model.actor-dto :as actor-dto]))

(def view-layout
  "View layout configuration"
  {:fields [{:name "id" :type "integer" :mandatory :validator integer?}
            {:name "alloid" :type "integer"}
            {:name "name" :type "string"}
            {:name "job" :type "string"}
            {:name "nationality" :type "string"}
            {:name "age" :type "integer"}
            {:name "birthdate" :type "string"}
            {:name "picture" :type "string"}]})

(defn check-fields [params fields-conf]
  (do (assert (integer? (fields-conf :alloid)))
      )
  true)


(defn check-field [{:keys [name type validator value] :as field-conf}]
  (when validator
    (when-not (validator value)
      (throw (new AssertionError (str "Assert failed: " (pr-str validator value))))))
  true)

(defn check-fields [fields-conf fields-value-map]
  (let [causes (atom [])
        success (atom true)]
    (let [fields-conf (map (fn [a] 
                             (assoc a :value 
                                    (fields-value-map 
                                     (keyword (a :name))))) fields-conf)]
      
      (doseq [field-conf fields-conf]
        (try (check-field field-conf)
             (catch AssertionError e
               (reset! success false)
               (reset! causes e)))))
    {:success @success
     :causes @causes}))

(check-fields (view-layout :fields) {:id 1
                                     :alloid ""
                                     :name "John"
                                     :job "Test"
                                     :nationality "Fr"
                                     :age "10"
                                     :birthdate "ok"
                                     :picture "img"})
(check-field {:name "id" :type "integer" :validator integer? :value 1})
(check-field {:name "id" :type "integer" :validator integer? :value ""})
(check-field {:name "id" :type "integer" :value 1})

(def foo (ref {}))
(dosync (ref-set foo "yo"))




(defn get-html [id]
  (main/get-html
   [:div (pr-str id)
    (let [actor-record (actor-dao/get-by-id id)]
      (crud-update/get-html actor-record
                            view-layout))]))

(defn handle-update [params]
  (main/get-html
   (let [data
         {:alloid (Integer. (params :alloid))
          :name (params :name)
          :job (params :job)
          :nationality (params :nationality)
          :age (Integer. (params :age))
          :birthdate (params :birthdate)
          :picture (params :picture)}]
     [:div (pr-str data)
      (try (let [actor-record (actor-dto/make-actor data)]
             (actor-dao/insert actor-record))
           (catch AssertionError e e))])))
