import React, { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import backend from "./api"
import About from "./components/About/About"
import Search from "./components/Search/Search"
import Nav from "./components/Nav/Nav"

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
    <Router>
      <div className="App">
        <Nav />
        <Search />
        <About />
        <p> {message} </p>
      </div>
    </Router>
  )
}

export default App
