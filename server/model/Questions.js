import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
    questionTitle: {
        type: String,
        required: "Question must have title"
    },
    questionBody: {
        type: String,
        required: "Question must have body"
    },
    questionTags: {
        type: [String],
        required: "Question must have tag"
    },
    noOfAnswer: {
        type: Number, default: 0
    },
    upVote: {
        type: [String],
        default: []
    },
    downVote: {
        type: [String],
        default: []
    },
    userPosted: {
        type: String,
        required: "question must have an author"
    },
    userId: {
        type: String
    },
    postedOn: {
        type: Date,
        default: Date.now
    },
    answer: [
        {
            answerBody: {
                type: String
            },
            userAnswered: {
                type: String
            },
            userId: {
                type: String
            },
            anseredOn: {
                type: Date,
                default: Date.now
            }
        }
    ]



})

const questionDB = mongoose.model("Question", questionSchema)

export default questionDB;