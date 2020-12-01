import React from "react"
import halloweenImage from "../../assets/pablo-keep-distance.png"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from "@material-ui/core/IconButton"

import "./EventItem.css"

/* eslint-disable react/prop-types */
function EventItem({ getEvent, eventName }) {
  return (
    <li className="eventItem" role="presentation" onClick={() => getEvent(eventName.name)} >
      <div className="eventItem__photo">
        <img src={halloweenImage}
          alt="generic group"
        />
      </div>
      <div className="event__info">
        <h2 className="eventItem__header">{eventName.name} </h2>
        <p className="eventItem__description">{eventName.description} </p>
      </div>
      <div className="eventItem__seeMore">
        <IconButton className="ArrowForwardIosIcon">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </li>
  )
}

export default EventItem
