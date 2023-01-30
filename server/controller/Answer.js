import questionDB from "../model/Questions.js"
import mongoose from "mongoose";

//  postAnser API FOR POSTING ANSWER  FOR ROUTE : -/Answer/post/:id
export const postAnswer = async (req, res) => {
    const { id: _id } = req.params;
    const { noOfAnswer, answerBody, userAnswered, userId } = req.body;

    // VALIDATING IS ID VALID OR NOT 
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...')
    }


    updateNoOFAnswer(_id, noOfAnswer)
    try {
        const updateQuestion = await questionDB.findByIdAndUpdate(_id, { $addToSet: { 'answer': [{ answerBody, userAnswered, userId }] } })
        res.status(200).json(updateQuestion)
        console.log(updateQuestion)
    } catch (error) {
        res.status(400).json(error)
    }
}


const updateNoOFAnswer = async (_id, noOfAnswer) => {
    try {
        await questionDB.findByIdAndUpdate(_id, { $set: { 'noOfAnswer': noOfAnswer } })
    } catch (error) {
        console.warn(error)
    }
}


//  DELETEANSWER API FOR DELETE ANSWER  FOR ROUTE : -/Answer/delete/ -->USER LOGIN REQUIRED

export const deleteAnswer = async (req, res) => {
    const { id: _id } = req.params;
    const { answerId, noOfAnswer } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).json('Question unavailable...')
        }
        if (!mongoose.Types.ObjectId.isValid(answerId)) {
            return res.status(404).json('Answer unavailable...')
        }
        updateNoOFAnswer(_id, noOfAnswer)

        await questionDB.updateOne(
            { _id },
            { $pull: { 'answer': { _id: answerId } } }
        )
        res.status(200).json({ message: "Answer deleted successfully..." })
    } catch (error) {

    }
}