import React, { useState, useEffect } from "react"
import backend from "./api"
// import Nav from "./components/Nav/Nav"

import "./App.css"

function App() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    async function fetchData() {
      const request = await backend.get("/")
      setMessage(request.data.message)
      return request
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <p> {message} </p>
    </div>
  )
}

export default App
