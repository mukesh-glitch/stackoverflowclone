import questionDB from '../model/Questions.js'
import mongoose from 'mongoose';



//  ASQQUESTION  API FOR POST QUESTION BY USER  FOR ROUTE : -/question/ask/ -->USER LOGIN REQUIRED
export const askQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new questionDB({ ...postQuestionData })
    try {
        await postQuestion.save();
        res.status(200).json("posted question successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("couldn't post new question")
    }

}

//  GETALLQUESTION API FOR FETCHING QUESTION BY USER  FOR ROUTE : -/question/get/ -->USER LOGIN REQUIRED
export const gatAllQuestion = async (req, res) => {
    try {
        const questionList = await questionDB.find();
        res.status(200).json(questionList)
    } catch (error) {
        res.status(404).json({ message: error.message })

    }

}
//  DELETEQUESTION API FOR DELETING QUESTION BY USER  FOR ROUTE : -/question/delete/:id -->USER LOGIN REQUIRED
export const deleteQuestion = async (req, res) => {
    try {
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            res.status(404).json({ message: "question is unavailable" })
        }
        await questionDB.findByIdAndRemove(_id);
        res.status(200).json({ message: "Question deleted successfully.... " })
    } catch (error) {
        res.status(404).json({ message: console.error.message })
    }

}


export const voteQuestion = async (req, res) => {

    try {
        const { id: _id } = req.params;
        const { value, userId } = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            res.status(404).json({ message: "question is unavailable" })
        }


        const question = await questionDB.findById(_id)
        const upIndex = question.upVote.findIndex((id) => id === String(userId));
        const downIndex = question.downVote.findIndex((id) => id === String(userId));

        console.log(value)
        if (value === 'upVote') {
            if (downIndex !== -1) {
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
            else if (upIndex === -1) {
                question.upVote.push(userId)
                console.log(question)
            }
            else {
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
        }
        else if (value === 'downVote') {
            if (upIndex !== -1) {
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
            else if (downIndex === -1) {
                question.downVote.push(userId)
            }
            else {
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
        }

        await questionDB.findByIdAndUpdate(_id, question)
        res.status(200).json({ message: "voted successfully ...." })
    } catch (error) {
        res.status(404).json('id not found')
    }

}