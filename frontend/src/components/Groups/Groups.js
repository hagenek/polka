import React, { useState, useEffect } from "react"
import GroupItem from "./GroupItem"
import GroupPage from "./GroupPage"
import backend from "../../api"

import "./Groups.css"

function Groups() {
  const [groupName, setGroupName] = useState([])
  const [clickedGroup, setClickedGroup] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get("/groups")
      setGroupName(request.data)
      return request
    }
    fetchData()
  }, [])

  const getGroup = async (search) => {
    const request = await backend.get(`groups/${search}`)
    console.log(search)
    console.log(clickedGroup)
    setClickedGroup(request.data)
  }

  console.log("groupname:", groupName)
  console.log("clickedGroup over return:", clickedGroup)

  return (
    <section className="group__section">
      <h1>Find a group you like here:</h1>
      {clickedGroup.length === 0 ? (
        <ul>
          {groupName.map((group) => (
            <GroupItem getGroup={getGroup} groupName={group} />
          ))}
        </ul>
      ) : (
        <ul>
          {clickedGroup.map((group) => (
            <GroupPage setClickedGroup={setClickedGroup} groupName={group} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Groups
