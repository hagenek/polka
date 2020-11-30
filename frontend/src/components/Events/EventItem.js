import React from "react"
import halloweenImage from "../../assets/pablo-keep-distance.png"

import "./EventItem.css"

/* eslint-disable react/prop-types */
function EventItem({ getEvent, eventName, addParticipant }) {
  return (
    <li className="eventItem">
      <img className="eventItem__photo" src={halloweenImage}
        alt="generic group"
      />
      <div role="presentation" onClick={() => getEvent(eventName.name)} className="event__info">
        <h2 className="eventItem__header">{eventName.name} </h2>
        <p className="eventItem__description">{eventName.description} </p>
      </div>
    </li>
  )
}

export default EventItem
