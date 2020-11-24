
const Contact = ({ user, handleClick }) => {
  return (
    <section onClick={() => handleClick(user)}>
      <h1>{user.firstname}</h1>
      <h1>{user.lastname}</h1>
    </section>
  )
}

export default Contact;