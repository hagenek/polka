import Chat from '../Chat/Chat'

const ChatList = ({ contacts }) => {
  return (
    <section>
      {contacts.map(contact => {
        
      })}
      <Chat />
    </section>
  )
}

export default ChatList;