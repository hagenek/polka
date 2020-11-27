import React, { useEffect, useState, useRef } from 'react'
import socketClient from 'socket.io-client'
import Message from '../Message/Message'
import api from "../../api"

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
      chat.members.forEach(user => {
        socket.current.emit('message', msg, user._id);
      })
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
    <section>
      <section>
        {chat.members.map(user => (
          <section>
            {user.firstName}
            {user.lastName}
          </section>
        ))
        } 
      </section>
      <ul>
        {messageList && messageList.map(msg => <Message message={msg} /> )}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
        <input type="submit" value="Send"/>
      </form>
    </section>
  )
}

export default Chat;
