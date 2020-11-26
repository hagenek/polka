import React from "react"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import IconButton from "@material-ui/core/IconButton"
import halloweenImage from "./pablo-keep-distance.png"

import "./EventPage.css"

/* eslint-disable react/prop-types */
function EventPage({ setClickedEvent, eventName }) {
  const emptyEventArrray = () => {
    setClickedEvent([])
  }

  return (
    <li className="eventPage">
      <IconButton className="checkBoxIcon">
        <ArrowBackIosIcon role="presentation" onClick={() => emptyEventArrray()} />
      </IconButton>
      <img className="eventPage__photo" src={halloweenImage}
        alt="generic group"
      />
      <div className="eventPage__info">
        <h2 className="eventPage__header">{eventName.name} </h2>
        <p className="eventPage__description">Description: {eventName.description} </p>
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

export default EventPage
