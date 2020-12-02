import React, { useState, useEffect } from "react"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import IconButton from "@material-ui/core/IconButton"

import "./GroupPage.css"

/* eslint-disable react/prop-types */
function GroupPage({ setClickedGroup, groupName, addMember, deleteMember, userId }) {
  const [memberExist, setMemberExist] = useState(false);
  const [membersNum, setMembersNum] = useState(0)

  const emptyGroupArrray = () => {
    setClickedGroup([])
  }

  useEffect(() => {
      const same = (member) => member === userId;
      const boolean = groupName.members.some(same);
      if (boolean === true) {
        setMemberExist(true)
        setMembersNum(groupName.members.length)
      }
    }, [groupName])

    const handleAddClick = () => {
      addMember()
      setMemberExist(true)
      setMembersNum(membersNum + 1)
    }
    const handleRemoveClick = () => {
      deleteMember()
      setMemberExist(false)
      setMembersNum(membersNum - 1)
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
        <p className="groupPage__members">Members: {membersNum} </p>
      </div>
      <div className="icons">
        {memberExist === true ? (
          <ul  onClick={(() => handleRemoveClick())}>
          <IconButton className="checkBoxIcon" >
              <CheckBoxIcon />
            </IconButton>
          </ul>
        ) : (
          <ul onClick={(() => handleAddClick())}>
          <IconButton className="CheckBoxOutlineBlankIcon">
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        </ul>
     )}
        </div>
    </li>
  )
}

export default GroupPage
