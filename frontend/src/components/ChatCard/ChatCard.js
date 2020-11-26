
const ChatCard = ({ chat, handleClick }) => {
  return (
    <section>
      <section onClick={() => handleClick(chat)}>
        {chat.members.map(user => (
          <section>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
          </section>
        ))
        }
      </section>
    </section>
  )
}

export default ChatCard;