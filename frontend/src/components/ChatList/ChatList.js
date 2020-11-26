import React, { useState, useEffect } from 'react'
import Chat from '../Chat/Chat'
import Contact from '../Contact/Contact'
import api from "../../api"

const ChatList = ({ userId }) => {
  const [chats, setChats] = useState(undefined)
  const [clickedChat, setClickedChat] = useState(undefined)

  useEffect(() => {
    const getChats = async () => {
      const res = await api.get(`api/chat/user/${userId}`)
      console.log(res)
      setChats(res.data.chats)
    }
    getChats()
  }, [])

  // Add better response page
  if(!chats) return <h1>No chats</h1>

  return (
    <section>
      <section>
        {chats.map(chat => <Contact key={chat._id} handleClick={chat => setClickedChat(chat)} chat={chat} /> )}
      </section>
      <section>
        {clickedChat && <Chat senderId={userId} chat={clickedChat} />}
      </section>
    </section>
  )
}

export default ChatList;
