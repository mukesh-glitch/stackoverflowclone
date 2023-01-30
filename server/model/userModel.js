import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
    },
    tags: {
        type: [String]
    },
    joinedon: {
        type: Date,
        default: Date.now
    }

})



const userdb = mongoose.model("User", userSchema);


export default userdb;