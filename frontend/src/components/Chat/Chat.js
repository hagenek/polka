import React, { useEffect } from 'react'
import socketClient from 'socket.io-client'

const Chat = () => {

  useEffect(() => {
    const socket = socketClient('http://localhost:8000/');
    socket.on('connect', () => {
      console.log("Connect");
    })
    socket.on('disconnect', () => {
      console.log("Disconnect");
    })
  }, [])

  return (
    <h1>Test</h1>
  )
}

export default Chat;
