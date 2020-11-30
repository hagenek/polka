import React, { useState, useEffect } from 'react'
import ChatContact from './ChatContact'
import api from "../../api"
import {TextField } from '@material-ui/core'
import './ChatCreate.css'

const ChatCreate = ({ userId }) => {
    const [input, setInput] = useState('');
    const [contacts, setContacts] = useState(undefined)
    const [members, setMembers] = useState([]);

    const handleMemberAdd = (id) => {
        const newMembers = [...members];
        const user = contacts.find(user => user._id === id)
        newMembers.push(user);
        setMembers(newMembers)
    }

    const handleMemberRemove = (id) => {
        let newMembers = members.filter(user => user._id !== id);
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
        <section className="chatcreate__section">
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
                <section className="chatcreate__contact-list">
                    {contacts && 
                        contacts
                            .filter(user => (`${user.firstName} ${user.lastName}`).toLowerCase().includes(input.toLowerCase()))
                            .filter(user => !members.includes(user))
                            .map(user => <ChatContact name={`${user.firstName} ${user.lastName}`} id={user._id} handleClick={id => handleMemberAdd(id)} />) 
                    }
                </section>
            </section>
            <section>
                {members
                    .map(user => <ChatContact name={`${user.firstName} ${user.lastName}`} id={user._id} handleClick={id => handleMemberRemove(id)} />) 
                }
            </section>
        </section>
    )
}

export default ChatCreate;
