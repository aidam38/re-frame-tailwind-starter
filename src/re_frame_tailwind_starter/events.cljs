(ns re-frame-tailwind-starter.events
  (:require [re-frame.core :refer [reg-event-db]]
            [re-frame-tailwind-starter.db :refer [default-db]]))

(reg-event-db ::initialize-db (constantly default-db))