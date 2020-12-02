import React, { useState, useEffect } from 'react'
import ChatMessages from './ChatMessages'
import ChatContact from './ChatContact'
import ChatCreate from './ChatCreate'
import api from "../../api"
import CreateChatIcon from "@material-ui/icons/AddComment"
import {TextField } from '@material-ui/core'
import base64js from 'base64-js'
import './ChatPage.css'

const ChatPage = ({ userId }) => {
  const [chats, setChats] = useState(undefined)
  const [clickedChatId, setClickedChatId] = useState(undefined)
  const [createChat, setCreateChat] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const getChats = async () => {
    if(userId) {
      const res = await api.get(`api/chat/user/${userId}`)
      const chats = res.data.chats
      if(chats) setChats([...chats])
    }
  }

  const handleSelectNewChat = async (id) => {
    await getChats();
    setClickedChatId(id)
  }

  const handleDeleteChat = async (id) => {
    await api.delete(`api/chat/${id}`);
    await getChats();
  }

  useEffect(() => {
    getChats()
  }, [userId])

  // Add better response page
  if (!chats) return <h1>No chats</h1>

  return (
    <section className="chatpage__container">
      <section className="chatcard__container">
        <section className="chatcard__inputs">
          <TextField
            required
            className="chatcard__inputs__text"
            type="text"
            id="filled-required"
            label="search chat"
            variant="outlined"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <CreateChatIcon
            className="chatcard__inputs__btn"
            onClick={() => {
              setCreateChat(true)
              setClickedChatId(undefined)
            }}
            style={{
              fontSize: 40,
              color: '#1F72E6'
            }}
          />
        </section>
          {chats
            .filter(chat => chat.name.toLowerCase().includes(searchInput.toLowerCase()))
            .map(chat => {
              const isGroupChat = chat.members.length > 2;
              if(!isGroupChat) {
                const receiver = chat.members.find(user => user._id !== userId);
                const image =  `data:image/png;base64,${base64js.fromByteArray(receiver.avatar.data)}`
                return <ChatContact key={chat._id} id={chat._id} name={chat.name} img={image} handleClickCard={id => setClickedChatId(id)} handleClickDelete={id => handleDeleteChat(id)} /> 
              }
              return <ChatContact key={chat._id} id={chat._id} name={chat.name} handleClickCard={id => setClickedChatId(id)} handleClickDelete={id => handleDeleteChat(id)} /> 
            })
          }
      </section>
      <section className="chat__container">
          {clickedChatId ? <ChatMessages userId={userId} chatId={clickedChatId} /> 
                         : createChat && <ChatCreate userId={userId} setClickedChatId={id => handleSelectNewChat(id)} />
          }
      </section>
    </section>
  )
}

export default ChatPage;
