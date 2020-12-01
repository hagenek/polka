/* eslint-disable */
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import backend from "./api"
// import backend from "./api"
import About from "./components/About/About"
import Search from "./components/Search/Search"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import Groups from "./components/Groups/Groups"
import People from "./components/People/People"
import ContactInfo from "./components/ContactInfo/ContactInfo"
import Register from "./components/Register/Register"
import BoardUser from "./components/BoardUser"
import Profile from "./components/Profile/Profile"
// import Profiles from "./components/Profiles/Profiles"
import Events from "./components/Events/Events"
import ChatPage from "./components/Chat/ChatPage"
import AuthService from "./services/auth-service"
import UserProfile from "./components/People/UserProfile/UserProfile"
import Upload from './components/Upload/Upload'
import Snake from './components/Snake/Snake'

import "./App.css"

function App() {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) setUserId(user.id);
  }, [])

  return (
    <div className="App">
      <Router>
        {/* <p>{message}</p> */}
        <Nav userId={userId} setUserId={setUserId} />
        <Search />

        {/* <Search /> */}
        <Switch>
          {/* <Search /> */}
          {/* <Register /> */}
          <Route exact path="/login" render={() => <Login setUserId={setUserId} />} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" render={() => <Profile userId={userId} />} />
          <Route exact path="/people" component={People} />
          <Route exact path="/upload" render={() => <Upload userId={userId} />} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/snake" component={Snake} />
          <Route exact path="/chat" render={() => <ChatPage userId={userId} />} />
          <Route path="/people/:user" component={UserProfile} />
          {/* <Route exact path="/profiles" component={Profiles} /> */}
          <Route exact path="/contactinfo" component={ContactInfo} />
          <Route exact path="/about" component={About} />
          <Route path="/user" component={BoardUser} />
          <Route exact path="/people" component={People} />
        </Switch>
        {/* <Profiles /> */}
        <Footer />
      </Router>
    </div>
  )
}

export default App
