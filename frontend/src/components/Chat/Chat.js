import React, { useEffect, useState, useRef } from 'react'
import socketClient from 'socket.io-client'

const Chat = ({ contact }) => {
  const socket = useRef();
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  
  const handleSubmit = e => {
    e.preventDefault();
    if(message !== "") {
      socket.current.emit('message', message);
      setMessage("");
    }
  }

  useEffect(() => {
    socket.current = socketClient('http://localhost:8000/');
    socket.current.on('connect', () => {
      console.log("Connect");
    })
    socket.current.on('disconnect', () => {
      console.log("Disconnect");
    })
    socket.current.on('message', msg => {
      setMessageList(prevMessageList => [...prevMessageList, msg])
    })
  }, [])

  if(!socket) return <h1>Establishing connection...</h1>

  return (
    <section>
      <section>
        {contact.firstname}
        {contact.lastname}
      </section>
      <ul>
        {messageList.map(message => <li>{message}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
        <input type="submit" value="Send"/>
      </form>
    </section>
  )
}

export default Chat;
