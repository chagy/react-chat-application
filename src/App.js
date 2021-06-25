import React from 'react'
import {ChatEngine} from 'react-chat-engine'

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh" 
            projectID="4b14de1f-b2a4-4298-a297-4e7703dd5c75" 
            userName="chagy" 
            userSecret="12345678" 
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
