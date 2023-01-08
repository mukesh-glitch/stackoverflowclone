import express from 'express'
import { askQuestion, gatAllQuestion } from '../controller/Question.js';

const router = express.Router();

router.post('/ask', askQuestion)
router.get('/get', gatAllQuestion)

export default router;