(ns glurps.helper.field.field
  (:require [glurps.helper.field.string :as string]
            [glurps.helper.field.integer :as integer]
            [glurps.helper.field.image :as image]))

(defn get-field-html [field-name record & layout]
  (if (first layout)
    (let [field-html-presentation ((first layout) :field-html-display)
          field-html-presentation-function
          (field-html-presentation (keyword field-name))]
      (if field-html-presentation-function
        (field-html-presentation-function record)
        ((keyword field-name) record)))
    ((keyword field-name) record)))

(defn get-field-html2 [field-name record layout]
  (let [field-conf
        (first (filter #(= (:name %) field-name) (layout :fields)))
        type (field-conf :type)]
    (cond (= type "string")
          (string/get-update-html field-name record)

          (= type "integer")
          (integer/get-update-html field-name record)
          
          (= type "picture")
          (image/get-update-html field-name record))))
