'use client';

import { ChangeEvent, KeyboardEvent } from 'react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
}

export default function ChatInput({
  input,
  setInput,
  sendMessage,
}: ChatInputProps) {
  return (
    <div className="bg-brand-yellow text-brand-black w-full max-w-2xl rounded-full p-4">
      <input
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') sendMessage();
        }}
        placeholder="Ask us anything..."
        className="text-brand-black placeholder-brand-black w-full bg-transparent outline-none"
      />
    </div>
  );
}
