(ns glurps.client.module.asset.list
  (:require [glurps.client.main :as main]
            [glurps.component.card.card :as card]
            [glurps.component.form.select :as select]
            [glurps.component.pagination.pagination :as pagination]
            [ajax.core :refer [GET POST raw-response-format text-response-format]]
            [clojure.browser.repl :as repl]
            [cljs.reader :as reader])
  (:use [jayq.core :only [$ css html]]))

(defonce state (r/atom 
                {:page 1
                 :tab "first"
                 :actor-selected ""
                 :user-records []
                 :records []}))

;; (swap! state assoc-in [:records] [{:id 1 :name "ok"} {:id 2 :name "ok 2"}])


(defn get-record-by-id [id]
  (filter #(= (str (:id %)) (str id)) (:records @state)))

(defn map-records-to-cards-html [records key-keyword image-keyword title-keyword meta-keyword]
  (map (fn [v]
         {:id (str (key-keyword v))
          :key (key-keyword v)
          :image (image-keyword v)
          :title (title-keyword v)
          :meta (meta-keyword v)}) records))

(defn vec-str-to-vec [vec-str]
  (reader/read-string vec-str))

(defn fetch-actor [page limit]
  (GET (str "http://localhost:3000/api?ctx=" "actor" "&page=" page "&limit=" limit)
       :handler 
       (fn [response] 
         (let [cards (map-records-to-cards-html (vec-str-to-vec response) :id :picture :name :nationality)] 
           (swap! state update-in [:records] (fn [v] cards))))))

(defn fetch-user [page limit]
  (GET (str "http://localhost:3000/api?ctx=" "user" "&page=" page "&limit=" limit)
       :handler 
       (fn [response] 
         (let [cards (map-records-to-cards-html (vec-str-to-vec response) :id :image :email :id)] 
           (swap! state update-in [:user-records] (fn [v] cards))))))

(defn simple-component []
  [:div
   [:div "Here is the application state:"
    [:div (str @state)]]])

(defn on-actor-cards-click [target]
  (let [el (.closest ($ (.-target target)) ".card")
        id (.attr el "data-id")]
    (swap! state assoc-in [:actor-selected] id)))

(defn display [b]
  (if b {:display "block"}
      {:display "none"}))

(defn actor-list [actor-selected]
  [:div
   [:div actor-selected]
   [:div {:on-click on-actor-cards-click} (card/cards-html (:records @state))
    (pagination/pager)]
   [:button {:class "ui button" :on-click (fn []
                                            (let [page (-> ($ "[data-tab=\"first\"] input[name=\"page\"]") .val)
                                                  limit (-> ($ "[data-tab=\"first\"] input[name=\"limit\"]") .val)]
                                              (fetch-actor page limit)))}
    "Fetch"]])

(defn actor-detail [record]
  [:div
   (card/card-html (:id record) "b" "c" "d")
   [:button {:class "ui button" :on-click (fn [] (swap! state assoc-in [:actor-selected] ""))} "Back"]])

(defn content-actor []
  [:div
   (let [id (:actor-selected @state)
         record (get-record-by-id (str id))]
     [:div 
      [:div {:style (display (= id ""))}
       (actor-list id)]      
      [:div {:style (display (not= id ""))}
       (actor-detail record)]])])

(defn content-user []
  [:div 
   [:div (card/cards-html (:user-records @state))
    (pagination/pager)
    [:button {:class "ui button" :on-click (fn []
                                             (let [page (-> ($ "[data-tab=\"second\"] input[name=\"page\"]") .val)
                                                   limit (-> ($ "[data-tab=\"second\"] input[name=\"limit\"]") .val)]
                                               (fetch-user page limit)))}
     "Fetch"]]])

(defn content-actor-after-render []
  (.dropdown ($ ".ui.dropdown")))

(defn tab []
  [:div [:div {:class "ui top attached tabular menu menutest"}
         [:div {:class "item active" :data-tab "first" :on-click (fn [] (swap! state conj {:tab "first"}))} "Actors"]
         [:div {:class "item" :data-tab "second" :on-click (fn [] (swap! state conj {:tab "second"}))} "Users"]
         [:div {:class "item" :data-tab "third" :on-click (fn [] (swap! state conj {:tab "third"}))} "Third"]]
   [:div {:class "ui bottom attached tab segment active" :data-tab "first"} (content-actor)]
   [:div {:class "ui bottom attached tab segment" :data-tab "second"} (content-user)]
   [:div {:class "ui bottom attached tab segment" :data-tab "third"} "Third"]])

(defn tab-init-js []
  ($ (fn [] 
       (.tab ($ ".menutest .item")))))

(defn home-page []
  [:div
   (tab)
   (simple-component)])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app"))
  (tab-init-js)
  (content-actor-after-render))

(defn init! []
  (mount-root))
