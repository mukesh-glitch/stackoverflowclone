import express from 'express'
import { askQuestion, gatAllQuestion, deleteQuestion, voteQuestion } from '../controller/Question.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.post('/ask', auth, askQuestion)
router.get('/get', gatAllQuestion)
router.delete('/delete/:id', auth, deleteQuestion)
router.patch('/vote/:id', auth, voteQuestion)
export default router;