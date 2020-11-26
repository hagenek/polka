import React from "react"
import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

import "./Contact.css"

function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us:</h1>
      <p>
        If you have any questions, please get in contact with us, or with your doctor for more
        information on how to join this platform.
      </p>
      <h3>
        {" "}
        <PhoneIcon /> Phone: 12345
      </h3>
      <h3>
        {" "}
        <MailOutlineIcon /> Email: roccos@salt.com
      </h3>
    </section>
  )
}

export default Contact
