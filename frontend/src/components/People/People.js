import React, { useState, useEffect } from "react"
import Person from "./Person"
import backend from "../../api"

import "./People.css"

function Groups() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get("api/user/all")
      setPeople(request.data)
      return request
    }
    fetchData()
  }, [])

  return (
    <section className="people__section">
      <h1>Find new friends: </h1>
      <ul className="people__list">
        {people.map((user) => (
          <Person User={user} />
        ))}
      </ul>
    </section>
  )
}

export default Groups
