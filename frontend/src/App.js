import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import backend from "./api"
import About from "./components/About/About"
import Search from "./components/Search/Search"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import Groups from "./components/Groups/Groups"
import People from "./components/People/People"
import Contact from "./components/Contact/Contact"

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
      <Router>
        <p>{message}</p>
        <Nav />
        <Search />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/people" component={People} />
          {/*
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/profile" component={Profile} />
          */}
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
