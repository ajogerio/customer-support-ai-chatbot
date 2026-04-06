'use client';

import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

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
        placeholder="Type your message..."
      />

      <button
        onClick={() => {
          if (input.trim() === '') return; // Do not send empty messages
          setMessages([...messages, input]);
          setInput('');
        }}
      >
        Send
      </button>
    </div>
  )
}