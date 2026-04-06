'use client';

import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if (input.trim() === '') return; // Do not send empty messages
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div>
      {/* Display Messages */}
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
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