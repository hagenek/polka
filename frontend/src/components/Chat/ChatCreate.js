import React, { useState, useEffect } from 'react'
import ChatContact from './ChatContact'
import { removeUserFromArray } from '../../services/chat-service'
import api from "../../api"
import {TextField } from '@material-ui/core'

const ChatCreate = ({ userId }) => {
    const [input, setInput] = useState('');
    const [contacts, setContacts] = useState(undefined)
    const [members, setMembers] = useState([]);

    const handleContactClick = (id) => {
        const newContacts = removeUserFromArray(id, contacts)
        setContacts(newContacts)
        const newMembers = removeUserFromArray(id, members)
        newMembers.push(id)
        setMembers(newMembers)
    }

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
                    .map(user => <ChatContact name={`${user.firstName} ${user.lastName}`} id={user._id} handleClick={id => handleContactClick(id)} />) 
            }
        </section>
    )
}

export default ChatCreate;
