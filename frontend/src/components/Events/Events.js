import React, { useState, useEffect } from "react"
import EventItem from "./EventItem"
import EventPage from "./EventPage"
import backend from "../../api"

import "./Events.css"

function Events({ userId }) {
  const [eventName, setEventName] = useState([])
  const [clickedEvent, setClickedEvent] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get("api/event")
      setEventName(request.data)
      return request
    }
    fetchData()
  }, [])

  const getEvent = async (search) => {
    const request = await backend.get(`api/event/${search}`)
    setClickedEvent(request.data)
  }

  const addParticipant = async () => {
    const request = await backend.put("api/event/participant", {
      userId,
      eventId: clickedEvent[0]._id
    })
    console.log("hello from event.js")
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
            <EventPage setClickedEvent={setClickedEvent} eventName={event} addParticipant={addParticipant} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Events
