(ns glurps.model.schema
  (:use korma.db
        korma.core)
  (:require [clojure.java.jdbc :as j]))

(def db (mysql {:host "localhost"
                :db "glurps"
                :user "root"
                :password "root"}))

;; CREATE TABLE `glurps`.`glu_user`
;; ( `user_id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , `create_date` DATETIME NOT NULL , `update_date` DATETIME NOT NULL , PRIMARY KEY (`user_id`)) ENGINE = InnoDB;

;; CREATE TABLE `glurps`.`group3` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

(defn create-table [name columns]
  (j/db-do-commands db 
                    (clojure.string/lower-case 
                     (j/create-table-ddl name columns
                                         {:table-spec "ENGINE=InnoDB"
                                          :entities clojure.string/upper-case}))))

(defn drop-table [name]
  (j/db-do-commands db (j/drop-table-ddl name)))

(def glu-group {:name "glu_group"
                :columns [[:group_id "int" :not :null :primary :key :auto_increment]
                          [:name "varchar(255)" :not :null]
                          [:create_date "datetime" :not :null]
                          [:update_date "datetime" :not :null]
                          [:active "boolean" :not :null :default "1"]
                          [:fav "boolean" :default "1"]]})

(create-table (:name glu-group) (:columns glu-group))


(j/db-do-commands db table-group)
(j/db-do-commands db (j/drop-table-ddl "glu_group"))

(defentity glu-group
  (table :glu_group)
  (entity-fields :group_id :name :create_date :update_date :active))

(insert glu-group (values {:name "test"
                           :create_date (new java.util.Date)
                           :update_date (new java.util.Date)
                           }))

(select glu-group)