import React, { useState } from 'react'
import Chat from '../Chat/Chat'
import Contact from '../Contact/Contact'

const ChatList = ({ user, contacts }) => {
  const [clickedContact, setClickedContact] = useState(undefined)

  const handleClick = (contact) => setClickedContact(contact)

  if(!contacts) return <h1>No contacts</h1>

  return (
    <section>
      <section>
        {contacts.map(contact => <Contact handleClick={contact => handleClick(contact)} user={contact} /> )}
      </section>
      <section>
        {clickedContact && <Chat sender={user} receiver={clickedContact} />}
      </section>
    </section>
  )
}

export default ChatList;
