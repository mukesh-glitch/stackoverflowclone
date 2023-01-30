import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import user from './routes/user.js'
import questionRoutes from './routes/question.js'
import answerRoutes from './routes/Answer.js'

const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());



app.use('/', user)
app.use('/question', questionRoutes)
app.use('/Answer', answerRoutes)

const PORT = process.env.PORT || 5000

const CONNECT_URL = process.env.CONNECTION_URL
mongoose.connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((con) => console.log(`database connected:${con.connection.host}`))
    .then(() => app.listen(PORT, () => { console.log(`server running on ${PORT}`) }))
    .catch(err => console.log(err.message))

