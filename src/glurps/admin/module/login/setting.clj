(ns glurps.admin.module.login.setting
  (:require [clojure.string :as str]
            [glurps.process.field.image :as field-image]
            [glurps.process.field.field :as field]))

(def list-conf
  {:path "/admin/login"
   :module-name "login"
   :db-class "Group"
   :field-id "_rid"
   :field-label "name"
   :field-image ""
   :fields [{:name "_rid" :type "integer" :list true :show true :insert false :update false :filter true}
            {:name "name" :type "string" :filter false}]
   :filter-fields ["id" "name"]
   :default-params {:columns ["_rid" "name"]
                    :order "id"
                    :asc "1"
                    :disable false
                    :page "1"
                    :limit "2"}
   ;; :list-action-html-fn list-action-html-fn
   :row-action [{:name "show" :url "/admin/login/show/{{id}}" :label "show" :title "Info" :icon "info"}
                {:name "edit" :url "/admin/login/show/{{id}}" :label "show" :title "Info" :icon "info"}]})
