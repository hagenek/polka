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

  return (
    <div className="App">
      <p> {message} </p>
      <ChatList contacts={mockContacts}/>
    </div>
  )
}

export default App
