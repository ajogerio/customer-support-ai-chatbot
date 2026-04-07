'use client'

import { ChangeEvent, KeyboardEvent } from "react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
}

export default function ChatInput({ input, setInput, sendMessage }: ChatInputProps) {
  return (
    <div className='flex bg-brand-yellow text-brand-black p-2 rounded-full'>
      <input 
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') sendMessage();
        }}
        placeholder="Type your message..."
        className="bg-transparent text-brand-black placeholder-brand-black outline-none"
      />
    </div>
  )
}