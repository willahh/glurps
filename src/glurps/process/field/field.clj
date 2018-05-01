(ns glurps.process.field.field
  (:require [glurps.admin.main :as main]
            [glurps.process.field.string :as string]
            [glurps.process.field.integer :as integer]
            [glurps.process.field.image :as image]))

(defn get-field-html [field-name record & layout]
  (if (first layout)
    (let [field-html-presentation ((first layout) :field-html-display)
          field-html-presentation-function
          (field-html-presentation (keyword field-name))]
      (if field-html-presentation-function
        (field-html-presentation-function record)
        ((keyword field-name) record)))
    ((keyword field-name) record)))

(defn get-field-html2 [field-name record fields read-only]
  (let [field-conf (first (filter #(= (:name %) field-name) fields))
        value (when record ((keyword field-name) record))
        type (:type field-conf)]
    (cond (= type "string")
          (if read-only
            (string/get-readonly-html field-name record value)
            (string/get-update-html field-name record value))
          
          (= type "integer")
          (if read-only
            (integer/get-readonly-html field-name record value)
            (integer/get-update-html field-name record value))
          
          (= type "picture")
          (if read-only
            (image/get-readonly-html field-name record value)
            (image/get-update-html field-name record value)))))
