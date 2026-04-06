'use client';

import { useState } from 'react';
import { Message } from '@/types/chat'
import ChatInput  from './ChatInput'

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if (input.trim() === '') return; // Do not send empty messages
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    setTimeout(() => {
      const aiMessage: Message = { text: 'Hello! How can I help you?', sender: 'ai' };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div>
      {/* Display Messages */}
      {messages.map((msg, index) => (
        <div key={index}>
          <strong>{msg.sender}</strong> {msg.text}
        </div>
      ))}

      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  )
}