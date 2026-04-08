'use client'

import { useState } from 'react';
import { Message, MESSAGE_SENDER } from '@/types/chat'
import ChatInput  from '@/components/Chat/ChatInput'
import Chat from '@/components/Chat/Chat'

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  
  const sendMessage = async () => {
    const messageToSend: string = input;

    if (messageToSend.trim() === '') return; // Do not send empty messages

    setMessages((prev) => [...prev, { text: messageToSend, sender: MESSAGE_SENDER.USER }]);
    setInput('');

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend })
      });

      const data = await response.json();

      setMessages((prev) => [...prev, { text: data.reply, sender: MESSAGE_SENDER.AI }])
      
    } catch(error) {
      console.error('Frontend Error:', error);
    }

  };

  return (
    <div className='flex flex-col h-screen w-screen items-center py-10'>
      <Chat messages={messages}/>
      <ChatInput 
        input={input} 
        setInput={setInput} 
        sendMessage={sendMessage} 
      />
    </div>
  )
}