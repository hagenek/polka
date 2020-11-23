import React, { useState, useEffect } from "react"
import "./App.css"
import backend from "./api"

function App() {
  const [message, setMessage] = useState("")
  console.log(message)
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
      <p>hello {message}</p>
    </div>
  )
}

export default App
