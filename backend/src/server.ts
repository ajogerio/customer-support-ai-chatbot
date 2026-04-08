import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    message: 'Customer Support AI Chatbot Backend is running'
  });
});

// Chat message endpoint
app.post('/api/chat', (req: Request, res: Response) => {
  const { message } = req.body;

  // Validate that the user really did send a message
  if (!message) {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  console.log(`User said ${message}`);

  const mockBotResponse = `You said: "${message}." I am in testing mode.`

  res.status(200).json({
    reply: mockBotResponse
  });
});

app.listen(Number(PORT), () => {
  console.log(`Customer Support AI Chatbot Backend is listening on http://localhost:${PORT}`);
});