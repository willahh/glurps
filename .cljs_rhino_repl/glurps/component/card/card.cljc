(ns glurps.component.card.card)

(defn card-html [image title meta]
  [:div {:class "card"}
   [:div {:class "image"}
    [:img {:src image}]]
   [:div {:class "content"}
    [:div {:class "header"}
     title]
    [:div {:class "meta"}
     meta]]])

(defn cards-html [records]
  [:div {:class "ui six link cards"}
   (for [record records]          
     (card-html (:image record) 
                (:title record)
                (:meta record)))])