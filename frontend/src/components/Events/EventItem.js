import React from "react"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import IconButton from "@material-ui/core/IconButton"
import halloweenImage from "../../assets/pablo-keep-distance.png"

import "./EventItem.css"

/* eslint-disable react/prop-types */
function EventItem({ getEvent, eventName }) {
  return (
    <li className="eventItem">
      <img className="eventItem__photo" src={halloweenImage}
        alt="generic group"
      />
      <div role="presentation" onClick={() => getEvent(eventName.name)} className="event__info">
        <h2 className="eventItem__header">{eventName.name} </h2>
        <p className="eventItem__description">{eventName.description} </p>
      </div>
      <div className="icons">
        <IconButton className="checkBoxIcon">
          <CheckBoxIcon />
        </IconButton>
        <IconButton className="CheckBoxOutlineBlankIcon">
          <CheckBoxOutlineBlankIcon />
        </IconButton>
      </div>
    </li>
  )
}

export default EventItem
