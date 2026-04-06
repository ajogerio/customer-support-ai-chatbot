'use client';

import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  
  return (
    <div>
      <h2>Chat Component</h2>
    </div>
  )
}