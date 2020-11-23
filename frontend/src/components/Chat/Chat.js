import React, { useEffect, useState } from 'react'
import socketClient from 'socket.io-client'

const Chat = () => {
  const [socket, setSocket] = useState(undefined);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socketIO = socketClient('http://localhost:8000/');
    socketIO.on('connect', () => {
      console.log("Connect");
    })
    socketIO.on('disconnect', () => {
      console.log("Disconnect");
    })
    setSocket(socketIO)
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    socket.emit('message', message);
    setMessage("");
  }

  if(!socket) return <h1>Establishing connection...</h1>

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
        <input type="submit" value="Send"/>
      </form>
    </section>
  )
}

export default Chat;
