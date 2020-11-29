import React, { useState } from 'react'
import {TextField } from '@material-ui/core'

const ChatForm = () => {
    const [input, setInput] = useState('')
    
    return (
        <section>
            <section>
            <TextField
                required
                type="text"
                id="filled-required"
                label="search user"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            </section>
        </section>
    )
}

export default ChatForm;
