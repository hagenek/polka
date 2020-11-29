import React, { useState, useEffect } from 'react'
import Chat from '../Chat/Chat'
import ChatCard from '../ChatCard/ChatCard'
import ChatForm from '../ChatForm/ChatForm'
import api from "../../api"
import CreateChatIcon from "@material-ui/icons/AddComment"
import './ChatList.css'

const ChatList = ({ userId }) => {
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
  if(!chats) return <h1>No chats</h1>

  if(createChat) {
    return (
      <h1>test</h1>
    )
  }

  return (
    <section className="chatlist__section">
      <section className="chatcard__container">
          <CreateChatIcon onClick={() => setCreateChat(true)} />
          {chats.map(chat => <ChatCard key={chat._id} userId={userId} handleClick={chat => setClickedChat(chat)} chat={chat} /> )}
      </section>
      <section className="chat__container">
          {clickedChat && <Chat senderId={userId} chat={clickedChat} />}
      </section>
    </section>
  )
}

export default ChatList;
