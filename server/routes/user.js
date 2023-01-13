import Express from "express";
import { signup, login } from "../controller/auth.js"
import { getAllUsers } from "../controller/user.js";
const router = Express.Router();

router.get('/', (req, res) => {
    res.send("this is stack over flow")
})


// ROUTES FOR USER AUTHENTICATION LOGIN AND SIGNUP
router.post('/user/signup', signup)
router.post('/user/login', login)

router.get('/user/getAllUsers', getAllUsers)

export default router;