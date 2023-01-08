import questionDB from '../model/Questions.js'

export const askQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new questionDB({ ...postQuestionData, userId: req.userId })
    try {
        await postQuestion.save();
        res.status(200).json("posted question successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("couldn't post new question")
    }

}

export const gatAllQuestion = async (req, res) => {
    try {
        const questionList = await questionDB.find();
        res.status(200).json(questionList)
    } catch (error) {
        res.status(404).json({ message: error.message })

    }

}