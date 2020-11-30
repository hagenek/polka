import React, { useState, useEffect } from 'react'
import ChatMessages from './ChatMessages'
import ChatContacts from './ChatContacts'
import ChatCreate from './ChatCreate'
import api from "../../api"
import CreateChatIcon from "@material-ui/icons/AddComment"
import './ChatPage.css'

const ChatPage = ({ userId }) => {
  const [chats, setChats] = useState(undefined)
  const [clickedChat, setClickedChat] = useState(undefined)
  const [createChat, setCreateChat] = useState(false)

  useEffect(() => {
    const getChats = async () => {
      const res = await api.get(`api/chat/user/${userId}`)
      setChats(res.data.chats)
    }
    getChats()
  }, [])

  // Add better response page
  if (!chats) return <h1>No chats</h1>

  return (
    <section className="chatPage__container">
      <section className="chat__sidebar-container">
        <CreateChatIcon onClick={() => {
          setCreateChat(true)
          setClickedChat(undefined)
        }} />
        {chats.map(chat => <ChatContacts key={chat._id} userId={userId} handleClick={chat => setClickedChat(chat)} chat={chat} />)}
      </section>
      <section className="chat__container">
        {clickedChat ? <ChatMessages senderId={userId} chat={clickedChat} />
          : createChat && <ChatCreate userId={userId} />
        }
      </section>
    </section>
  )
}

export default ChatPage;
