import React, { useState, useEffect } from 'react'
import Chat from '../Chat/Chat'
import Contact from '../Contact/Contact'

const ChatList = ({ userId }) => {
  const [chats, setChats] = useState(undefined)
  const [clickedChat, setClickedChat] = useState(undefined)

  useEffect(() => {
    const getChats = async () => {
      const chats = await backend.get("/users")
      
    }
    getChats()
  }, [])

  // Add better response page
  if(!chats) return <h1>No chats</h1>

  return (
    <section>
      <section>
        {chats.map(chat => <Contact handleClick={chat => setClickedChat(chat)} user={chat} /> )}
      </section>
      <section>
        {clickedChat && <Chat sender={userId} receiver={clickedChat} />}
      </section>
    </section>
  )
}

export default ChatList;
