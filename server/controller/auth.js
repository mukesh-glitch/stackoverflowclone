import userdb from "../model/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'

//  SING UP API FOR USER SIGN UP  FOR ROUTE : -/user/signup 
export const signup = async (req, res) => {

    const { name, email, password, } = req.body;

    try {

        const isUserExit = await userdb.findOne({ email })
        if (isUserExit) {
            return res.status(404).json({ message: "user already Exist" })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = await userdb.create(
            {
                name: name,
                email: email,
                password: hashedPassword
            }
        );
        newUser.password = " "
        console.log(newUser)
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", { expiresIn: "1h" })
        res.status(200).json({ result: newUser, token: token })
    } catch (error) {
        res.status(500).json(" someting went wrong")
    }

}

//  LOGIN API FOR USER LOGIN  FOR ROUTE : -/user/login 
export const login = async (req, res) => {

    const { email, password } = req.body;
    console.log(req.body)
    try {
        const isUserExit = await userdb.findOne({ email })
        if (!isUserExit) {
            return res.status(404).json({ message: "user not Exist" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, isUserExit.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Inavaild Credentials" })
        }
        isUserExit.password = " "
        console.log(isUserExit)
        const token = jwt.sign({ email: isUserExit.email, id: isUserExit._id }, "test", { expiresIn: "1h" })
        res.status(200).json({ result: isUserExit, token: token })
    } catch (error) {
        res.status(500).json(" someting went wrong")
    }

}