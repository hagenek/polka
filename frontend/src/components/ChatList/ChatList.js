import React, { useState } from 'react'
import Chat from '../Chat/Chat'
import Contact from '../Contact/Contact'

const ChatList = ({ contacts }) => {
  const [clickedContact, setClickedContact] = useState(undefined)

  const handleClick = (contact) => setClickedContact(contact)

  if(!contacts) return <h1>No contacts</h1>

  return (
    <section>
      {contacts.map(contact => <Contact handleClick={contact => handleClick(contact)} user={contact} /> )}
      {clickedContact && <Chat contact={clickedContact} />}
    </section>
  )
}

export default ChatList;
