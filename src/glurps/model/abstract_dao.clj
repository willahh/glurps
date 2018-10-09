(ns glurps.model.abstract-dao
  (:use korma.db
        korma.core
        glurps.process.db.db))

(def abstract-col-table
  (def-glu-table "glu_abstract_col" [{:name "create_date" :type "datetime" :null false}
                                     {:name "update_date" :type "datetime" :null false}
                                     {:name "active" :type "boolean" :default "1"}
                                     {:name "fav" :type "boolean" :default "0"}]))
