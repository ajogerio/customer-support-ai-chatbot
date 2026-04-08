import { Router } from 'express';
import { createAiResponse } from '../controllers/chatController.js';

const router = Router();

router.post('/', createAiResponse);

export default router;
