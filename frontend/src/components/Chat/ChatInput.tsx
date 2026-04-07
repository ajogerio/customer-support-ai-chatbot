'use client'

import { ChangeEvent, KeyboardEvent } from "react";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
}

export default function ChatInput({ input, setInput, sendMessage }: ChatInputProps) {
  return (
    <div className='fixed bottom-8 bg-brand-yellow text-brand-black p-4 rounded-full w-full max-w-2xl'>
      <input 
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') sendMessage();
        }}
        placeholder="Ask us anything..."
        className="bg-transparent text-brand-black placeholder-brand-black outline-none w-full"
      />
    </div>
  )
}