(ns glurps.model.spec.actor.spec
  (:require [glurps.model.actor :as model-actor]
            [clojure.string :as str]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [clojure.spec.test.alpha :as stest]
            [clojure.string :as str]))



(s/conform even? 100)






(import java.util.Date)
(s/def ::date inst?)
(s/def ::suit #{:club :diamond :heart :spade})
(s/valid? ::date (Date.))
(s/conform ::suit :club)


(s/def ::big-even (s/and int? even? #(> % 1000)))
(s/valid? ::big-even :foo)
(s/valid? ::big-even 10)
(s/valid? ::big-even 10000)

(s/def ::name-or-id (s/or :name string?
                          :id int?))

(s/valid? ::name-or-id "abc")
(s/valid? ::name-or-id 100)
(s/valid? ::name-or-id :foo)



(s/valid? string? nil)
(s/valid? (s/nilable string?) nil)


(s/explain ::suit 42)
(s/explain ::big-even 5)
(s/explain-data ::name-or-id :foo)
(s/explain-str ::name-or-id :foo)


(def email-regex #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")
(s/def ::email-type (s/and string? #(re-matches email-regex %)))

(s/def ::acctid int?)
(s/def ::first-name string?)
(s/def ::last-name string?)
(s/def ::email ::email-type)

(s/def ::person (s/keys :req [::first-name ::last-name ::email]
                        :opt [::phone]))


(s/valid? ::person
          {::first-name "Elon"
           ::last-name "Musk"
           ::email "elon@example.com"})

(s/explain ::person {::first-name "Elon"})
(s/explain-str ::person {::first-name "Elon"
                         ::last-name "Musk"
                         ::email "n/a"})







(s/def :unq/person
  (s/keys :req-un [::first-name ::last-name ::email]
          :opt-un [::phone]))

(s/conform :unq/person {:first-name "Elon"
                        :last-name "Musk"
                        :email "elon@example.com"})

(s/explain :unq/person {:first-name "Elon"
                        :last-name "Musk"
                        :email "n/a"})





(defrecord Person [first-name last-name email phone])

(s/explain :unq/person
           (->Person "Elon" nil nil nil))




(s/def ::port number?)
(s/def ::host string?)
(s/def ::server (s/keys* :req [::id ::host]
                         :opt [::port]))

(s/conform ::server [::id :s1 ::host "example.com" ::port 555])





(defn person-name
  [person]
  {:pre [(s/valid? ::person person)]
   :post [(s/valid? string? %)]}
  (str (::first-name person) " " (::last-name person)))

;; (person-name 42)
(person-name {::first-name "Elon" ::last-name "Musk" ::email "a@a.com"})


(defn person-name
  [person]
  (let [p (s/assert ::person person)]
    (str (::first-name p) " " (::last-name p))))

(s/check-asserts true)
(person-name 100)




(defn- set-config [prop val]
  (println "set" prop val))

(defn configure [input]
  (let [parsed (s/conform ::config input)]
    (if (= parsed ::s/invalid)
      (throw (ex-info "Invalid input" (s/explain-data ::config input)))
      (for [{prop :prop [_ val] :val} parsed]
        (set-config (subs prop 1) val)))))

(configure ["-server" "foo" "-verbose" true "-user" "joe"])




(defn ranged-rand
  "Returns random int in range start <= rand < end"
  [start end]
  (+ start (long (rand (- end start)))))

(s/fdef ranged-rand
        :args (s/and (s/cat :start int? :end int?)
                     #(< (:start %) (:end %)))
        :ret int?
        :fn (s/and #(>= (:ret %) (-> % :args :start))
                   #(< (:ret %) (-> % :args :end))))
(use 'clojure.repl)

(doc ranged-rand)




















(def suit? #{:club :diamond :heart :spade})
(def rank? (into #{:jack :queen :king :ace} (range 2 11)))
(def deck (for [suit suit? rank rank?] [rank suit]))

(s/def ::card (s/tuple rank? suit?))
(s/def ::hand (s/* ::card))

(s/def ::name string?)
(s/def ::score int?)
(s/def ::player (s/keys :req [::name ::score ::hand]))

(s/def ::players (s/* ::player))
(s/def ::deck (s/* ::card))
(s/def ::game (s/keys :req [::players ::deck]))

(def kenny
  {::name "Kenny Rogers"
   ::score 100
   ::hand []})
(s/valid? ::player kenny)


(s/explain ::game
           {::deck deck
            ::players [{::name "Kenny Rogers"
                        ::score 100
                        ::hand [[2 :banana]]}]})


(gen/generate (s/gen int?))
(gen/generate (s/gen nil?))
(gen/sample (s/gen string?))
(gen/sample (s/gen #{:club :diamond :heart :spade}))
(gen/sample (s/gen (s/cat :k keyword? :ns (s/+ number?))))

(def test-player-a (gen/generate (s/gen ::player)))
test-player-a


(gen/generate (s/gen ::game))


(s/exercise (s/cat :k keyword? :ns (s/+ number?)) 5)
(s/exercise (s/or :k keyword? :s string? :n number?) 5)
(s/exercise `ranged-rand)


(gen/generate (s/gen even?))
(gen/generate (s/gen (s/and int? even?)))

(defn divisible-by [n] #(zero? (mod % n)))
(gen/sample (s/gen (s/and int?
                          #(> % 0)
                          (divisible-by 3))))


(gen/sample
 (s/gen (s/and string? #(clojure.string/includes? % "hello"))))


(s/def ::kws (s/and keyword? #(= (namespace %) "my.domain")))
(s/valid? ::kws :my.domain/name)
(gen/sample (s/gen ::kws))


(def kw-gen (s/gen #{:my.domain/name :my.domain/occupation :my.domain/id}))
(gen/sample kw-gen 5)

(s/def ::kws (s/with-gen (s/and keyword? #(= (namespace %) "my.domain"))
               #(s/gen #{:my.domain/name :my.domain/occupation :my.domain/id})))

(s/valid? ::kws :my.domain/id)
(gen/sample (s/gen ::kws))

(def kw-gen-2 (gen/fmap #(keyword "my.domain" %)
                        (gen/such-that #(not= % "")
                                       (gen/string-alphanumeric))))
(gen/sample kw-gen-2 20)


(s/def ::hello
  (s/with-gen #(clojure.string/includes? % "hello")
    #(gen/fmap (fn [[s1 s2]] (str s1 "hello" s2))
               (gen/tuple (gen/string-alphanumeric) (gen/string-alphanumeric)))))

(gen/sample (s/gen ::hello))

(s/def ::roll (s/int-in 0 11))
(gen/sample (s/gen ::roll))

(s/def ::the-aughts (s/inst-in #inst "2000" #inst "2010"))
(drop 50 (gen/sample (s/gen ::the-aughts) 55))









(stest/instrument `ranged-rand)

(stest/check `ranged-rand)




(defn ranged-rand  ;; BROKEN!
  "Returns random int in range start <= rand < end"
  [start end]
  (+ start (long (rand (- start end)))))

(ranged-rand 1 10)

(stest/abbrev-result (first (stest/check `ranged-rand)))
(stest/abbrev-result (first (stest/check `ranged-rand)))

