;; Todo implement a factory like to avoid multiple cond
(ns glurps.process.field.field
  (:require [glurps.admin.main :as main]
            [glurps.process.field.string :as string]
            [glurps.process.field.integer :as integer]
            [glurps.process.field.image :as image]
            [glurps.process.field.boolean :as boolean]))

(defn get-field-html [field record fields read-only]
  (let [field-name (:name field)
        field-conf (first (filter #(= (:name %) field-name) fields))
        value (when record (record (keyword field-name)))
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
            (image/get-update-html field-name record value))

          (= type "boolean")
          (if read-only
            (boolean/get-readonly-html field-name record value)
            (boolean/get-update-html field-name record value)))))

(defn format-value-for-insert [type value]
  (cond (= type "string")
        value
        
        (= type "integer")
        value
        
        (= type "picture")
        value

        (= type "boolean")
        (if (= value "on")
          true false)))