import React from "react"
import { Redirect } from "react-router-dom"
import "./Groupitem.css"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"

/* eslint-disable react/prop-types */
function GroupItem({ groupName }) {
  const handleClick = () => {
    return <Redirect to={`groups/${groupName.name}/`} />
  }

  return (
    <div>
      <li className="groupItem">
        <div role="presentation" onClick={handleClick} className="group__info">
          <h2 className="groupItem__header">{groupName.name} </h2>
          <p className="groupItem__description">{groupName.description} </p>
        </div>
        <div className="icons">
          <CheckBoxIcon />
          <CheckBoxOutlineBlankIcon />
        </div>
      </li>
    </div>
  )
}

export default GroupItem
