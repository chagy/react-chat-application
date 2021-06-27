import React from 'react'
import {ChatEngine} from 'react-chat-engine'

import ChatFeed from './components/ChatFeed';

import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh" 
            projectID="4b14de1f-b2a4-4298-a297-4e7703dd5c75" 
            userName={localStorage.getItem('username')} 
            userSecret={localStorage.getItem('password')} 
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
