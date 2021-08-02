(ns re-frame-tailwind-starter.core
  (:require [reagent.dom :as rd]
            [re-frame.core :as rf]
            [re-frame-tailwind-starter.db]
            [re-frame-tailwind-starter.events]
            [re-frame-tailwind-starter.views :refer [main]]
            [re-frame-tailwind-starter.routes :refer [start-routes]]))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (rd/render [main] (.getElementById js/document "app")))

(defn ^:after-load re-render []
  (mount-root))

(defn ^:export init []
  (start-routes)
  (mount-root))
