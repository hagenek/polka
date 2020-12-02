import React, { useState, useEffect } from "react"
import GroupItem from "./GroupItem"
import GroupPage from "./GroupPage"
import backend from "../../api"

import "./Groups.css"

function Groups({ userId }) {
  const [groupName, setGroupName] = useState([])
  const [clickedGroup, setClickedGroup] = useState([])

  async function fetchData() {
    const request = await backend.get("api/group")
    setGroupName(request.data)
    return request
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getGroup = async (name) => {
    const request = await backend.get(`api/group/${name}`)
    setClickedGroup(request.data)
  }

  const addMember = async () => {
    const request = await backend.put("api/group/member", {
      userId,
      groupId: clickedGroup[0]._id
    })
  }

  const deleteMember = async () => {
    const request = await backend.put("api/group/", {
      userId,
      groupId: clickedGroup[0]._id
    },
    )
    await fetchData()
  }

  return (
    <section className="group__section">
      <h1 className="group__header">Find a group you like here:</h1>
        {clickedGroup.length === 0 ? (
          <ul className="group__containers">
            {groupName.map((group) => (
              <GroupItem getGroup={getGroup}
                groupName={group}
                addMember={addMember} />
            ))}
          </ul>
        ) : (
            <ul className="group__containers">
              {clickedGroup && clickedGroup.map((group) => (
                <GroupPage
                  setClickedGroup={setClickedGroup}
                  groupName={group}
                  addMember={addMember}
                  deleteMember={deleteMember}
                  userId={userId} />
              ))}
            </ul>
          )}
    </section>
  )
}

export default Groups
