import React from "react"
import "./Groupitem.css"

/* eslint-disable react/prop-types */
function GroupItem({ groupName }) {
  return (
    <div>
      <li className="groupItem">
        <h2 className="groupItem__header">{groupName.name} </h2>
        <p className="groupItem__description">{groupName.description} </p>
      </li>
    </div>
  )
}

export default GroupItem
