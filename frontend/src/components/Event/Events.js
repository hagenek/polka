import React, { useState, useEffect } from "react"
import GroupItem from "./GroupItem"
import GroupPage from "./GroupPage"
import backend from "../../api"

import "./Event.css"

function Event() {
  const [eventName, setEventName] = useState([])
  const [clickedEvent, setClickedEvent] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get("/events")
      setGroupName(request.data)
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
            <GroupItem getEvent={getEvent} eventName={event} />
          ))}
        </ul>
      ) : (
        <ul>
          {clickedEvent.map((event) => (
            <GroupEvent setClickedEvent={setClickedEvent} eventName={event} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Event
