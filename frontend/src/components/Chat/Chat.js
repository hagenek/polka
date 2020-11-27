import React, { useEffect, useState, useRef } from 'react'
import socketClient from 'socket.io-client'
import Message from '../Message/Message'
import api from "../../api"
import './Chat.css'

const Chat = ({ senderId, chat }) => {
  const socket = useRef();
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState(undefined);
  
  const handleSubmit = e => {
    e.preventDefault();
    if(message !== "") {
      const msg = {
        text: message,
        sender: senderId
      }
      socket.current.emit('message', msg, chat.members)
      setMessage("");
    }
  }

  useEffect(() => {
    socket.current = socketClient('http://localhost:1337/', { query: `id=${senderId}` });
    socket.current.on('connect', () => {
      console.log("Connect");
    })
    socket.current.on('disconnect', () => {
      console.log("Disconnect");
    })
    socket.current.on('message', async msg => {
      const user = await api.get(`api/user/${msg.sender}`)
      console.log(user)
      setMessageList(prevMessageList => {
        msg.sender = user.data;
        const newMessageList = [...prevMessageList];
        newMessageList.push(msg);
        return newMessageList;
      })
    })

    const getMessages = async () => {
      const res = await api.get(`api/chat/${chat._id}`)
      setMessageList(res.data.messages);
    }
    getMessages()
  }, [])

  if(!socket) return <h1>Establishing connection...</h1>

  return (
    <section className="chat__section">
    <div>
      <section className="chat__to-message">
        {chat.members.map(user => (
          <h1>{user.firstName} {user.lastName}</h1>
        ))
        } 
      </section>
      <ul>
        {messageList && messageList.map(msg => <Message message={msg} /> )}
      </ul>
      </div>
      <div className="form__container">
      <form className="chat__form" onSubmit={handleSubmit}>
        <input className="chat__input" type="text" value={message} onChange={e => setMessage(e.target.value)}/>
        <input className="chat__btn" type="submit" value="Send"/>
      </form>
      </div>
    </section>
  )
}

export default Chat;
