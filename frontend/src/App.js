import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import backend from "./api"
import ChatList from './components/ChatList/ChatList'
import About from "./components/About/About"
import Search from "./components/Search/Search"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import Profiles from "./components/Profiles/Profiles"

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

  const mockContacts = [
    {
      "username": "joakimonline",
      "password": "hejhej123",
      "firstname": "joakim",
      "lastname": "andersson",
      "image": "VÄLJ EN SNART",
      "city": "oslo",
      "address": "kirkegata 12",
      "gender": "male",
      "genderinterests": "male",
      "interests": ["sport", "gym", "fotboll", "tv", "fashion"],
      "description": "snill gogutt",
      "email": "joakim.andersson@teknologi.se",
      "phone": 12345,
      "birthday": Date,
      "friends": ["Georg Ekeberg"],
      "groups": null,
      "events": null,
      "date": Date,
      "disabilities": "celebral pares",
      "id": "507f191e810c19729de860ea",
      "governmentId": Number,
    },
    {
      "username": "username1",
      "password": "password2",
      "firstname": "firstname3",
      "lastname": "lastname4",
      "image": "VÄLJ EN SNART",
      "city": "oslo",
      "address": "kirkegata 12",
      "gender": "male",
      "genderinterests": "male",
      "interests": ["sport", "gym", "fotboll", "tv", "fashion"],
      "description": "snill gogutt",
      "email": "joakim.andersson@teknologi.se",
      "phone": 12345,
      "birthday": Date,
      "friends": ["Georg Ekeberg"],
      "groups": null,
      "events": null,
      "date": Date,
      "disabilities": "celebral pares",
      "id": "1349b4ddd2781d08c09890f3",
      "governmentId": Number,
    }
  ]

  const mockUser= {
    "username": "username43",
    "password": "password43",
    "firstname": "firstname34",
    "lastname": "lastname4",
    "image": "VÄLJ EN SNART",
    "city": "oslo",
    "address": "kirkegata 12",
    "gender": "male",
    "genderinterests": "male",
    "interests": ["sport", "gym", "fotboll", "tv", "fashion"],
    "description": "snill gogutt",
    "email": "joakim.andersson@teknologi.se",
    "phone": 12345,
    "birthday": Date,
    "friends": ["Georg Ekeberg"],
    "groups": null,
    "events": null,
    "date": Date,
    "disabilities": "celebral pares",
    "id": "8349b4ddd2781d08c09890f3",
    "governmentId": Number,
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Search />
        <ChatList userId={"5fbfae60574a72724a0b4641"} />
        <p>{message}</p>
        <Switch>
          <Route exact path="/" component={Login} />
          {/*
          <Route exact path="/people" component={People} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/contact" component={Contact} />
          </Route> */}
          <Route exact path="/about" component={About} />
        </Switch>
        <Profiles />
        <Footer />
      </Router>
    </div>
  )
}

export default App
