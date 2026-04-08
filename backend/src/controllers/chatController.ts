import express, { type Application, type Request, type Response } from 'express';
import { model } from '../config/gemini.js';

export const createAiResponse =  async (req: Request, res: Response) => {
  const { message } = req.body;

  // Validate that the user really did send a message
  if (!message) {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  try {
    const result = await model.generateContent(message);
    const aiResponse = result.response;
    const aiResponseText = aiResponse.text();

    console.log(`User said: ${message}`);
    console.log(`AI replied: ${aiResponseText}`);

    res.status(200).json({ reply: aiResponseText });
  } catch (error) {
    console.error('AI Error: ', error);
    res.status(500).json({ error: `${error}`})
  }
}