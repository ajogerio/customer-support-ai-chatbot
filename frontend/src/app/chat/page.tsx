'use client'

import { useState } from 'react';
import { Message, MESSAGE_SENDER } from '@/types/chat'
import ChatInput  from '@/components/Chat/ChatInput'
import Chat from '@/components/Chat/Chat'

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  
  const sendMessage = () => {
    if (input.trim() === '') return; // Do not send empty messages
    setMessages([...messages, { text: input, sender: MESSAGE_SENDER.USER }]);
    setInput('');

    setTimeout(() => {
      const aiMessage: Message = { text: 'Hello! How can I help you?', sender: MESSAGE_SENDER.AI };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
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