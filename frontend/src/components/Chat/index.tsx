'use client';

import { Message } from '@/types/chat';
import MessageBubble from './MessageBubble';

interface ChatProps{
  messages: Message[]
}

export default function Chat({ messages }: ChatProps) {
  return (
    <div className='flex flex-col w-full h-full max-w-2xl overflow-y-auto scrollbar-hide'>
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
    </div>
  )
}