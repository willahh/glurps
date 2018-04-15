(ns glurps.module.html.html-helper)

(defn get-field-html [column mode record]
  (let [value ((keyword column) (first record))]
    (cond (= mode "show")
          value

          (= mode "update")
          (clojure.string/join ["<input value=\"" value "\">"])

          (= mode "insert")
          "<input>")))

(defn get-action-link [record action id]
  (cond (= action "show")
        (clojure.string/join ["?mode=show&id=" id])

        (= action "insert")
        (clojure.string/join ["?mode=insert"])

        (= action "update")
        (clojure.string/join ["?mode=update&id=" id])

        (= action "delete")
        (clojure.string/join ["?mode=delete&id=" id])))

(defn get-action-html [record id]
  [:div {:class "action"}
   [:a {:href (get-action-link record "show" id) :class "btn"} "Show"]
   [:a {:href (get-action-link record "update" id) :class "btn"} "Edit"]
   [:a {:href (get-action-link record "delete" id) :class "btn"} "Delete"]])