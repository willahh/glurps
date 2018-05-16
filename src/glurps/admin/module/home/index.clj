(ns glurps.admin.module.home.index
  (:require [glurps.admin.main :as main]))

(defn get-html [params session]
  (main/admin-page-html-wrapper 
   session
   params
   [:div
    [:div.ui.four.statistics
     [:div.statistic
      [:div.value
       "\n      22\n    "]
      [:div.label
       "\n      Saves\n    "]]
     [:div.statistic
      [:div.text.value
       "\n      Three"
       [:br]
       "\n      Thousand\n    "]
      [:div.label
       "\n      Signups\n    "]]
     [:div.statistic
      [:div.value
       [:i.plane.icon]
       " 5\n    "]
      [:div.label
       "\n      Flights\n    "]]
     [:div.statistic
      [:div.value
       [:img.ui.circular.inline.image
        {:src "/images/avatar/small/joe.jpg"}]
       "\n      42\n    "]
      [:div.label
       "\n      Team Members\n    "]]]
    [:div.ui.statistics
     [:div.red.statistic
      [:div.value
       "\n      27\n    "]
      [:div.label
       "\n      Red\n    "]]
     [:div.orange.statistic
      [:div.value
       "\n      8\n    "]
      [:div.label
       "\n      Orange\n    "]]
     [:div.yellow.statistic
      [:div.value
       "\n      28\n    "]
      [:div.label
       "\n      Yellow\n    "]]
     [:div.olive.statistic
      [:div.value
       "\n      7\n    "]
      [:div.label
       "\n      Olive\n    "]]
     [:div.green.statistic
      [:div.value
       "\n      14\n    "]
      [:div.label
       "\n      Green\n    "]]
     [:div.teal.statistic
      [:div.value
       "\n      82\n    "]
      [:div.label
       "\n      Teal\n    "]]
     [:div.blue.statistic
      [:div.value
       "\n      1\n    "]
      [:div.label
       "\n      Blue\n    "]]
     [:div.violet.statistic
      [:div.value
       "\n      22\n    "]
      [:div.label
       "\n      Violet\n    "]]
     [:div.purple.statistic
      [:div.value
       "\n      23\n    "]
      [:div.label
       "\n      Purple\n    "]]
     [:div.pink.statistic
      [:div.value
       "\n      15\n    "]
      [:div.label
       "\n      Pink\n    "]]
     [:div.brown.statistic
      [:div.value
       "\n      36\n    "]
      [:div.label
       "\n      Brown\n    "]]
     [:div.grey.statistic
      [:div.value
       "\n      49\n    "]
      [:div.label
       "\n      Grey\n    "]]]]))
