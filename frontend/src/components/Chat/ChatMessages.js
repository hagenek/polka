import React, { useEffect, useState, useRef } from 'react'
import socketClient from 'socket.io-client'
import ChatMessage from './ChatMessage'
import api from "../../api"
import './ChatMessages.css'

const ChatMessages = ({ userId, chatId }) => {
  const socket = useRef();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(undefined);
  
  const handleSubmit = e => {
    e.preventDefault();
    if (message !== "") {
      const msg = {
        text: message,
        sender: userId,
        timestamp: new Date(),
        chatId
      }
      socket.current.emit('message', msg, chat)
      setMessage("");
    }
  }

  useEffect(() => {
    socket.current = socketClient('http://localhost:1337/', { query: `id=${userId}` });
    socket.current.on('connect', () => {
      console.log("Connect");
    })
    socket.current.on('disconnect', () => {
      console.log("Disconnect");
    })
    socket.current.on('message', async msg => {
      const user = await api.get(`api/user/${msg.sender}`)
      setChat(prevChat => {
        msg.sender = user.data;
        const newMessages = [...prevChat.messages];
        newMessages.push(msg);
        const newChat = prevChat;
        newChat.messages = newMessages;
        return newChat;
      })
    })

    const getChat = async () => {
      const res = await api.get(`api/chat/${chatId}`)
      setChat(res.data);
    }
    getChat()
  }, [])

  if(!socket || !chat) return <h1>Establishing connection...</h1>

  return (
    <>
      <section className="chat__section">

        <section className="chat__to-message">
          {chat.name}
        </section>
        <ul>
          {chat && chat.messages.map(msg => <ChatMessage userId={userId} message={msg} /> )}
        </ul>
      </section>
      <div className="form__container">
        <form className="chat__form" onSubmit={handleSubmit}>
          <input className="chat__input" type="text" value={message} onChange={e => setMessage(e.target.value)} />
          <input className="chat__btn" type="submit" value="Send" />
        </form>
      </div>
    </>
  )
}

export default ChatMessages;
