import React, { useState, useEffect } from 'react'
import api from "../../api"
import {TextField } from '@material-ui/core'

const ChatCreate = ({ userId }) => {
    const [input, setInput] = useState('');
    const [contacts, setContacts] = useState(undefined)

    useEffect(() => {
        const getContacts = async () => {
            // Should fetch contacts
            const res = await api.get(`api/user/all`);
            setContacts(res.data)
        }
        getContacts()
    }, [])

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
            {contacts && 
                contacts
                    .filter(user => (`${user.firstName} ${user.lastName}`).toLowerCase().includes(input.toLowerCase()))
                    .map(user => <h1>{user.firstName} {user.lastName}</h1>) 
            }
        </section>
    )
}

export default ChatCreate;
