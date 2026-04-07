'use client'

import { Message, MESSAGE_SENDER } from "@/types/chat"

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === MESSAGE_SENDER.USER

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`rounded-md max-w-xs ${
          isUser ? 'bg-brand-yellow text-brand-black p-2' : 'bg-brand-black text-brand-white'
        }`}
      >
        {message.text}
      </div>
    </div>
  )
}