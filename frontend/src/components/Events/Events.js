import React, { useState, useEffect } from "react"
import EventItem from "./EventItem"
import EventPage from "./EventPage"
import backend from "../../api"

import "./Events.css"

function Events() {
  const [eventName, setEventName] = useState([])
  const [clickedEvent, setClickedEvent] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get("/events")
      setEventName(request.data)
      return request
    }
    fetchData()
  }, [])

  const getEvent = async (search) => {
    const request = await backend.get(`events/${search}`)
    console.log(search)
    console.log(clickedEvent)
    setClickedEvent(request.data)
  }

  return (
    <section className="event__section">
      <h1>Find an event you like here:</h1>
      {clickedEvent.length === 0 ? (
        <ul>
          {eventName.map((event) => (
            <EventItem getEvent={getEvent} eventName={event} />
          ))}
        </ul>
      ) : (
        <ul>
          {clickedEvent.map((event) => (
            <EventPage setClickedEvent={setClickedEvent} eventName={event} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Events
