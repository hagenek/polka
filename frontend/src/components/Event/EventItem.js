import React from "react"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import IconButton from "@material-ui/core/IconButton"

import "./Eventitem.css"

/* eslint-disable react/prop-types */
function EventItem({ getEvent, eventName }) {
  return (
    <li className="eventItem">
      <img
        src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg"
        alt="generic event"
      />
      <div role="presentation" onClick={() => getGroup(eventName.name)} className="group__info">
        <h2 className="groupItem__header">{groupName.name} </h2>
        <p className="groupItem__description">{groupName.description} </p>
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

export default GroupItem
