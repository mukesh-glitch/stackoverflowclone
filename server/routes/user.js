import Express from "express";

const router = Express.Router();

router.get('/', (req, res) => {
    res.send("this is stack over flow")
})

router.post('/user/signup', () => { })
router.post('/user/login', () => { })

export default router;