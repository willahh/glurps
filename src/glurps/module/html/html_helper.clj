(ns glurps.module.html.html-helper)

(defn get-field-html [column mode record]
  (let [value ((keyword column) (first record))]
    (cond (= mode "show")
          value

          (= mode "update")
          (clojure.string/join ["<input value=\"" value "\">"])

          (= mode "insert")
          "<input>")))

(defn get-action-link [{:keys [show-url
                               insert-url
                               update-url
                               delete-url] :as spec}
                       record action id]
  (cond (= action "show")
        (clojure.string/replace show-url #"\{id\}" (str id))

        (= action "insert")
        (clojure.string/replace insert-url #"\{id\}" (str id))
        
        (= action "update")
        (clojure.string/replace update-url #"\{id\}" (str id))

        (= action "delete")
        (clojure.string/replace delete-url #"\{id\}" (str id))))

(defn get-action-html [spec record id]
  [:div {:class "action"}
   [:a {:href (get-action-link spec record "show" id) :class "btn"} "Show"]
   [:a {:href (get-action-link spec record "update" id) :class "btn"} "Edit"]
   [:a {:href (get-action-link spec record "delete" id) :class "btn"} "Delete"]])