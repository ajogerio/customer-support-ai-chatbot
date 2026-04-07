'use client';

import { Message } from '@/types/chat';
import MessageBubble from './MessageBubble';

interface ChatProps{
  messages: Message[]
}

export default function Chat({ messages }: ChatProps) {
  return (
    <div className='max-w-xl'>
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
    </div>
  )
}