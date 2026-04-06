'use client'

import { Message } from "@/types/chat"

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div>
      <strong>{message.sender}</strong> {message.text}
    </div>
  )
}