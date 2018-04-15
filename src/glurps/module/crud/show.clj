(ns glurps.module.crud.show)

(defn get-html [columns record]
  [:table {:class "table showTable" :style "border: 1px solid #000; width: auto;"}
   [:tbody
    (for [column columns]
      [:tr
       [:td {:width 50} column]
       [:td ((keyword column) record)]])]])

