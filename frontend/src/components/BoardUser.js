/* eslint-disable */
import React, { useState, useEffect } from "react"

import UserService from "../services/user-service"

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(content);
      }
    );
  }, [])

  return (
    <div>
      <h1>{content}</h1>
    </div>
  )
}

export default BoardUser
