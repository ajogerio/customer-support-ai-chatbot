'use client';

import { Message } from '@/types/chat';
import MessageBubble from './MessageBubble';

interface ChatProps {
  messages: Message[];
}

export default function Chat({ messages }: ChatProps) {
  return (
    <div className="no-scrollbar flex h-full w-full max-w-2xl flex-col overflow-y-auto px-2">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
    </div>
  );
}
