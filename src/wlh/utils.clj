(ns wlh.utils)

(defn in? 
  "True if coll contains elm."
  [coll elm]  
  (some #(= elm %) coll))