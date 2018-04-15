(ns glurps.helper.field.field)

(defn get-field-html [field-name record & layout]
  (if (first layout)
    (let [field-html-presentation ((first layout) :field-html-display)
          field-html-presentation-function
          (field-html-presentation (keyword field-name))]
      (if field-html-presentation-function
        (field-html-presentation-function record)
        ((keyword field-name) record)))
    ((keyword field-name) record)))
