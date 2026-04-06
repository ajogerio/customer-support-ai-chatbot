'use client';

import { useState } from 'react';
import { Message } from '@/types/chat'

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

      {/* Input Box */}
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') sendMessage();
        }}
        placeholder="Type your message..."
      />

      <button onClick={() => {sendMessage()}}>Send</button>
    </div>
  )
}