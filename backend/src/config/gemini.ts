import { GoogleGenerativeAI } from '@google/generative-ai';


const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY || '');

const SYSTEM_INSTRUCTION = `You are a helpful, polite, and professional Customer Support AI for a gym company. 
Keep your answers concise and friendly. 
People who talk to you usually have questions or concerns so be ready to answer them.
If you don't know an answer, suggest that the user speaks to a human representative.
`.trim();

export const model = genAI.getGenerativeModel({ 
  model: 'gemini-3.1-flash-lite-preview',
  systemInstruction: SYSTEM_INSTRUCTION,
});