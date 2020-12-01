import React, { useState, useEffect } from "react"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import IconButton from "@material-ui/core/IconButton"
import halloweenImage from "../../assets/pablo-keep-distance.png"

import "./EventPage.css"

/* eslint-disable react/prop-types */
function EventPage({ setClickedEvent, eventName, addParticipant, userId }) {
  const [participantExist, setParticipantExist] = useState(false);

  const emptyEventArrray = () => {
    setClickedEvent([])
  }

  useEffect(() => {
    const same = (participant) => participant === userId;
    const boolean = eventName.participants.some(same);
    if (boolean === true) {
      setParticipantExist(true)
    }
  }, [participantExist])

  return (
    <li className="eventPage">
      <div className="eventPage__icons" onClick={() => emptyEventArrray()}>
        <IconButton className="checkBoxIcon">
          <ArrowBackIosIcon role="presentation" />
        </IconButton>
      </div>
      <img className="eventPage__photo" src={halloweenImage}
        alt="generic group"
      />
      <div className="eventPage__info">
        <h2 className="eventPage__header">{eventName.name} </h2>
        <p className="eventPage__description">Description: {eventName.description} </p>
        <p className="eventPage__description">Participants: {eventName.participants.length} </p>
      </div>
      <div className="icons" onClick={(() => addParticipant())}>
      {participantExist === true ? (
          <ul>
            <IconButton className="checkBoxIcon" >
              <CheckBoxIcon />
            </IconButton>
          </ul>
        ) : (
          <ul>
          <IconButton className="CheckBoxOutlineBlankIcon">
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        </ul>
     )}
        </div>
    </li>
  )
}

export default EventPage
