'use client';

import { useState } from 'react';
import { Message, MESSAGE_SENDER } from '@/types/chat'
import ChatInput  from './ChatInput'
import MessageBubble from './MessageBubble';

export default function Chat() {
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
    <div>
      {/* Display Messages */}
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
      
      {/* Chat Input */}
      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  )
}