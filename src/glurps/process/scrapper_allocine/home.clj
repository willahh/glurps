(ns glurps.process.scrapper-allocine.home
  (:require [net.cgrand.enlive-html :as html]
            [clojure.core.cache :as cache]
            [clojure.string :as str]
            [glurps.config :as config]
            [glurps.process.scrapper-allocine.movie :as scrapper-movie]
            [glurps.process.moviehelper :as moviehelper]))

(def html-home (html/html-resource (java.net.URL. (config/get :root-url))))

(defn get-sorties-week-id-list []
  (map #(moviehelper/extract-id-from-sheet-url ((% :attrs) :href))
       (html/select html-home
                    [:div.mdl-inside :div.roller-item :div.meta :a.meta-title-link])))

(defn get-sorties-week-sheets []
  (map #(scrapper-movie/get-fields-from-id %) (get-sorties-week-id-list)))


(defn get-sorties-week-rows-debug []
  [{:genre ["Science fiction" "Action"],
    :description "Ready Player One",
    :date "28 mars 2018",
    :director "Steven Spielberg",
    :title "Ready Player One",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors ["Tye Sheridan" "Olivia Cooke" "Ben Mendelsohn" "Lena Waithe"],
    :id "229831",
    :image
    "http://fr.web.img5.acsta.net/c_215_290/pictures/18/02/14/09/15/3437390.jpg"}
   {:genre ["Animation"],
    :description "Croc-Blanc",
    :date "28 mars 2018",
    :director "Alexandre Espigares",
    :title "Croc-Blanc",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors [],
    :id "248271",
    :image
    "http://fr.web.img6.acsta.net/c_215_290/pictures/18/02/02/12/00/3677227.jpg"}
   {:genre ["Drame" "Thriller"],
    :description "Le Collier rouge",
    :date "28 mars 2018",
    :director "Jean Becker",
    :title "Le Collier rouge",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors
    ["François Cluzet"
     "Nicolas Duvauchelle"
     "Sophie Verbeeck"
     "Jean-Quentin Chatelain"],
    :id "246746",
    :image
    "http://fr.web.img6.acsta.net/c_215_290/pictures/18/01/26/15/39/2471051.jpg"}
   {:genre ["Comédie"],
    :description "Les dents, pipi et au lit",
    :date "28 mars 2018",
    :director "Emmanuel Gillibert",
    :title "Les dents, pipi et au lit",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors
    ["Arnaud Ducret" "Louise Bourgoin" "Timéo Bolland" "Saskia Dillais de Melo"],
    :id "254378",
    :image
    "http://fr.web.img5.acsta.net/c_215_290/pictures/18/02/08/14/09/1688226.jpg"}
   {:genre ["Documentaire"],
    :description "Blue",
    :date "28 mars 2018",
    :director "Keith Scholey",
    :title "Blue",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors ["Cécile de France"],
    :id "248292",
    :image
    "http://fr.web.img4.acsta.net/c_215_290/pictures/17/12/20/15/29/3374453.jpg"}
   {:genre ["Historique" "Drame" "Biopic"],
    :description "Marie Madeleine",
    :date "28 mars 2018",
    :director "Garth Davis",
    :title "Marie Madeleine",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors ["Rooney Mara" "Joaquin Phoenix" "Chiwetel Ejiofor" "Tahar Rahim"],
    :id "244531",
    :image
    "http://fr.web.img2.acsta.net/c_215_290/pictures/18/01/17/10/58/4388125.jpg"}
   {:genre ["Comédie" "Fantastique"],
    :description "Madame Hyde",
    :date "28 mars 2018",
    :director "Serge Bozon",
    :title "Madame Hyde",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors ["Isabelle Huppert" "Romain Duris" "José Garcia" "Adda Senani"],
    :id "244428",
    :image
    "http://fr.web.img4.acsta.net/c_215_290/pictures/18/01/25/13/42/1312919.jpg"}
   {:genre ["Thriller"],
    :description "Carnivores",
    :date "28 mars 2018",
    :director "Jérémie Renier",
    :title "Carnivores",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors
    ["Leïla Bekhti" "Zita Hanrot" "Bastien Bouillon" "Johan Heldenbergh"],
    :id "237945",
    :image
    "http://fr.web.img6.acsta.net/c_215_290/pictures/18/02/02/09/02/1231067.jpg"}
   {:genre ["Drame"],
    :description "Vent du Nord",
    :date "28 mars 2018",
    :director "Walid Mattar",
    :title "Vent du Nord",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors
    ["Philippe Rebbot"
     "Mohamed Amine Hamzaoui"
     "Kacey Mottet Klein"
     "Corinne Masiero"],
    :id "250090",
    :image
    "http://fr.web.img3.acsta.net/c_215_290/pictures/18/03/06/15/21/5436847.jpg"}
   {:genre ["Animation"],
    :description "Pat et Mat déménagent !",
    :date "28 mars 2018",
    :director "Marek Beneš",
    :title "Pat et Mat déménagent !",
    :note {:presse 0.8400000000000001, :spectator 0.8400000000000001},
    :actors [],
    :id "261687",
    :image
    "http://fr.web.img6.acsta.net/c_215_290/pictures/18/02/20/16/48/0323277.jpg"}])

(defn find-by-id [id]
  (filter (fn [row]
            (== (compare (row :id) id) 0))
          (get-sorties-week-rows-debug)))
