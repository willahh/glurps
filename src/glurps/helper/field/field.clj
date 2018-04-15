(ns glurps.helper.field.field)

(defn get-field-html [field-name record & field-presentation-map]
  (let [field-presentation-function
        ((first field-presentation-map) (keyword field-name))]
    (if field-presentation-function
      (field-presentation-function record)
      ((keyword field-name) record))))