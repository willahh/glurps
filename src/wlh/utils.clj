(ns wlh.utils)

(defn in? 
  "True if coll contains elm."
  [coll elm]  
  (some #(= elm %) coll))

(defn some-field-test? [b]
  (if (some? b) b true))