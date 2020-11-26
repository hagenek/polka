import React, { useEffect, useState, useRef } from 'react'
import socketClient from 'socket.io-client'
import Message from '../Message/Message'
import mockChat from './mockChat'

const Chat = ({ sender, receiver }) => {
  const socket = useRef();
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState(undefined);
  
  const handleSubmit = e => {
    e.preventDefault();
    if(message !== "") {
      const msg = {
        text: message,
        sender: sender.id
      }
      socket.current.emit('message', msg, receiver.id);
      setMessage("");
    }
  }

  const addMessage = (prevMessageList, msg) => {
    const newMessageList = prevMessageList;
    newMessageList.messages.push(msg);
    return newMessageList;
  }

  useEffect(() => {
    socket.current = socketClient('http://localhost:1337/', { query: `id=${sender.id}` });
    socket.current.on('connect', () => {
      console.log("Connect");
    })
    socket.current.on('disconnect', () => {
      console.log("Disconnect");
    })
    socket.current.on('message', msg => {
      setMessageList(prevMessageList => addMessage({...prevMessageList}, msg))
    })
    // Should get user and receivers chat from db
    setMessageList(mockChat)
  }, [])

  if(!socket) return <h1>Establishing connection...</h1>

  else if(!receiver) return <h1>No contact selected</h1>

  return (
    <section>
      <section>
        {receiver.firstname}
        {receiver.lastname}
      </section>
      <ul>
        {messageList && messageList.messages.map(message => <Message message={message} />)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
        <input type="submit" value="Send"/>
      </form>
    </section>
  )
}

export default Chat;
