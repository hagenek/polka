import React, { useState, useEffect } from 'react'
import ChatMessages from './ChatMessages'
import ChatContact from './ChatContact'
import ChatCreate from './ChatCreate'
import api from "../../api"
import CreateChatIcon from "@material-ui/icons/AddComment"
import './ChatPage.css'

const ChatPage = ({ userId }) => {
  const [chats, setChats] = useState(undefined)
  const [clickedChatId, setClickedChatId] = useState(undefined)
  const [createChat, setCreateChat] = useState(false)

  useEffect(() => {
    const getChats = async () => {
      const res = await api.get(`api/chat/user/${userId}`)
      setChats(res.data.chats)
    }
    getChats()
  }, [userId])

  // Add better response page
  if (!chats) return <h1>No chats</h1>

  return (
    <section className="chatlist__section">
      <section className="chatcard__container">
          <CreateChatIcon onClick={() => {
            setCreateChat(true)
            setClickedChatId(undefined)
          }}/>
          {chats.map(chat => <ChatContact key={chat._id} id={chat._id} name={chat.name} handleClick={id => setClickedChatId(id)} /> )}
      </section>
      <section className="chat__container">
          {clickedChatId ? <ChatMessages senderId={userId} chatId={clickedChatId} /> 
                         : createChat && <ChatCreate userId={userId} />
          }
      </section>
    </section>
  )
}

export default ChatPage;
