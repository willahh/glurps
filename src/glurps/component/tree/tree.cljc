(ns glurps.component.tree.tree)

(defn html []
  [:div.ui.styled.accordion
   [:div.title
    [:i.dropdown.icon]
    "\nLevel 1\n"]
   [:div.content
    "\nWelcome to level 1\n"
    [:div.accordion.transition.hidden
     [:div.title
      [:i.dropdown.icon]
      "\nLevel 1A\n"]
     [:div.content
      [:p.transition.hidden
       "Level 1A Contents"]
      [:div.accordion.transition.hidden
       [:div.title.active
        [:i.dropdown.icon]
        "\nLevel 1A-A\n"]
       [:div.content.active
        "\nLevel 1A-A Contents\n"]
       [:div.title
        [:i.dropdown.icon]
        "\nLevel 1A-B\n"]
       [:div.content
        "\nLevel 1A-B Contents\n"]]]
     [:div.title
      [:i.dropdown.icon]
      "\nLevel 1B\n"]
     [:div.content
      "\nLevel 1B Contents\n"]
     [:div.title.active
      [:i.dropdown.icon]
      "\nLevel 1C\n"]
     [:div.content.active
      "\nLevel 1C Contents\n"]]]
   [:div.title.active
    [:i.dropdown.icon]
    "\nLevel 2\n"]
   [:div.content.active
    [:p.transition.visible
     "Welcome to level 2"]
    [:div.accordion.transition.visible
     [:div.active.title
      [:i.dropdown.icon]
      "\nLevel 2A\n"]
     [:div.active.content
      [:p
       "Level 2A Contents"]
      [:div.accordion
       [:div.title.active
        [:i.dropdown.icon]
        "\nLevel 2A-A\n"]
       [:div.content.active
        "\nLevel 2A-A Contents\n"]
       [:div.title
        [:i.dropdown.icon]
        "\nLevel 2A-B\n"]
       [:div.content
        "\nLevel 2A-B Contents\n"]]]
     [:div.title
      [:i.dropdown.icon]
      "\nLevel 2B\n"]
     [:div.content
      "\nLevel 2B Contents\n"]
     [:div.title
      [:i.dropdown.icon]
      "\nLevel 2C\n"]
     [:div.content
      "\nLevel 2C Contents\n"]]]])
