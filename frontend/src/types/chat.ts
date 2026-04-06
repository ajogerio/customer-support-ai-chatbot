export const MESSAGE_SENDER = {
  USER: 'user',
  AI: 'ai',
} as const;

export type Message = {
  text: string;
  sender: typeof MESSAGE_SENDER[keyof typeof MESSAGE_SENDER];
};
