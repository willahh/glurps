(ns glurps.process.field.one-to-many
  (:require [glurps.config :as config]))

(defn get-readonly-html [field-name record value]
  value)

(defn get-update-html [field-name record value]
  [:div.ui.fluid.multiple.search.selection.dropdown
   [:input
    {:name "tags", :type "hidden"}]
   [:i.dropdown.icon]
   [:div.default.text
    "TODO"]
   [:div.menu
    [:div.item
     {:data-value "angular"}
     "Angular"]
    [:div.item
     {:data-value "css"}
     "CSS"]
    [:div.item
     {:data-value "design"}
     "Graphic Design"]
    [:div.item
     {:data-value "ember"}
     "Ember"]
    [:div.item
     {:data-value "html"}
     "HTML"]
    [:div.item
     {:data-value "ia"}
     "Information Architecture"]
    [:div.item
     {:data-value "javascript"}
     "Javascript"]
    [:div.item
     {:data-value "mech"}
     "Mechanical Engineering"]
    [:div.item
     {:data-value "meteor"}
     "Meteor"]
    [:div.item
     {:data-value "node"}
     "NodeJS"]
    [:div.item
     {:data-value "plumbing"}
     "Plumbing"]
    [:div.item
     {:data-value "python"}
     "Python"]
    [:div.item
     {:data-value "rails"}
     "Rails"]
    [:div.item
     {:data-value "react"}
     "React"]
    [:div.item
     {:data-value "repair"}
     "Kitchen Repair"]
    [:div.item
     {:data-value "ruby"}
     "Ruby"]
    [:div.item
     {:data-value "ui"}
     "UI Design"]
    [:div.item
     {:data-value "ux"}
     "User Experience"]]])
