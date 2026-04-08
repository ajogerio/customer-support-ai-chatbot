import 'dotenv/config';
import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import cors from 'cors';
import { createAiResponse } from './controllers/chatController.js';

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    message: 'Customer Support AI Chatbot Backend is running',
  });
});

// Chat message endpoint
app.post('/api/chat', createAiResponse);

app.listen(Number(PORT), () => {
  console.log(
    `Customer Support AI Chatbot Backend is listening on http://localhost:${PORT}`
  );
});
