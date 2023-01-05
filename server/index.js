import express from "express"
import cors from 'cors'
import mongoose from "mongoose"
import user from './routes/user.js'


const app = express();

app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());



app.use('/', user)

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://admin:mukesh1631@cluster0.vnbhwbq.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((con) => console.log(`database connected:${con.connection.host}`))
    .then(() => app.listen(PORT, () => { console.log(`server running on ${PORT}`) }))
    .catch(err => console.log(err.message))
