(ns glurps.component.form.select)

(defn select-html [field-name options]
  (let [selected-option (first (filter #(= (:value %) (:name %)) options))]
    [:div {:class "ui selection dropdown"}
     [:input {:type "hidden" :name field-name :value (:value selected-option)}]
     [:i {:class "dropdown icon"}]
     [:div {:class "text"} (:label selected-option)]
     [:div {:class "menu"}
      (for [option options]
        [:div (conj {:class "item" :data-value (:name option)}
                    (when (= (:name option) (:value option)) {:selected "true"})) (:label option)])]]))