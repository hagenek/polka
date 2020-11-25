import React, { useState, useEffect } from "react"
import GroupItem from "./GroupItem"
import backend from "../../api"

import "./Groups.css"

function Groups() {
  const [groupName, setGroupName] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get("/groups")
      setGroupName(request.data)
      return request
    }
    fetchData()
  }, [])

  return (
    <section className="group__section">
      <h1>Find a group you like here:</h1>
      <ul>
        {groupName.map((group) => (
          <GroupItem groupName={group} />
        ))}
      </ul>
    </section>
  )
}

export default Groups
