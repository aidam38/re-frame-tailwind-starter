(ns re-frame-tailwind-starter.routes
  (:require [reitit.frontend :as rtf]
            [reitit.frontend.easy :as rtfe]
            [re-frame-tailwind-starter.views :refer [main]]))

(def routes
  (rtf/router
   ["/" {:view main}]))

(defn start-routes []
  (rtfe/start! routes (fn [] ()) {}))