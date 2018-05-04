(ns wlh.validation)

(defn valid-birthdate? [value]
  (and (= (type value) java.lang.String)
       (some? value)
       (not-empty value)))

(defn valid-filmography? [value]
  (and (= (type value) java.lang.String)
       (some? value)
       (not-empty value)))

(defn valid-picture? [value]
  (and (= (type value) java.lang.String)
       (some? value)
       (not-empty value)))


(defn check-field [{:keys [name type validator value] :as field-conf}]
  "Take a map of field configuration and test it"
  (when validator
    (when-not (validator value)
      (throw (new AssertionError (str "Assert failed: " (pr-str validator value))))))
  true)

(defn check-fields [fields raw-data]
  "Take a vector a field configuration, a map of raw data, and test all fields"
  (let [causes (atom [])
        success (atom true)]
    (let [fields (map (fn [field] 
                        (assoc field :value ((keyword (:name field)) raw-data))) fields)]
      
      (doseq [field-conf fields]
        (try (check-field field-conf)
             (catch AssertionError e
               (reset! success false)
               (reset! causes e)))))
    (if @success true
        (throw (Exception. "Some fields are not valid")))))
