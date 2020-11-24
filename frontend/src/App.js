import React, { useState, useEffect } from "react"
import "./App.css"
import backend from "./api"
import ChatList from './components/ChatList/ChatList'

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
      <ChatList />
    </div>
  )
}

export default App
