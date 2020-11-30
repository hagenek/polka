import React from "react"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import IconButton from "@material-ui/core/IconButton"

import "./GroupPage.css"

/* eslint-disable react/prop-types */
function GroupPage({ setClickedGroup, groupName, addMember }) {
  const emptyGroupArrray = () => {
    setClickedGroup([])
  }

  return (
    <li className="groupPage">
      <div className="checkBox" onClick={() => emptyGroupArrray()}>
      <IconButton className="checkBoxIcon">
        <ArrowBackIosIcon role="presentation" />
      </IconButton>
      </div>
      <img
        className="groupPage__photo"
        src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg"
        alt="generic group"
      />
      <div className="groupPage__info">
        <h2 className="groupPage__header">{groupName.name} </h2>
        <p className="groupPage__description">Description: {groupName.description} </p>
        <p className="groupPage__members">Members: {groupName.members.length} </p>
      </div>
      <div className="icons" onClick={(() => addMember())}>
       <IconButton className="checkBoxIcon" >
          <CheckBoxIcon />
       </IconButton>
        <IconButton className="CheckBoxOutlineBlankIcon">
          <CheckBoxOutlineBlankIcon />
        </IconButton>
      </div>
    </li>
  )
}

export default GroupPage
