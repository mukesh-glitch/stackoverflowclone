import * as api from '../api'


// ACTION FOR QUESTIONS 
export const askQuestionAction = (questionData, navigate) => async (dispatch) => {
    try {
        console.log({ postquestion: 'from post action' })
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: "POST_QUESTION" })
        dispatch(getAllquestionAction())
        navigate('/')

    } catch (error) {
        console.log(error)
    }
}

export const getAllquestionAction = () => async (dispatch) => {
    try {
        const { data } = await api.getAllQuestions()
        // console.log(data)
        dispatch({ type: "FETCH_ALL_QUESTION", payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteQuestionAction = (id, navigate) => async (dispatch) => {

    try {
        const { data } = await api.deleteQuestion(id)
        dispatch(getAllquestionAction())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const voteQuestionAction = (id, value, userId) => async (dispatch) => {
    try {
        const { data } = await api.voteQuestion(id, value, userId)
        dispatch(getAllquestionAction())
    } catch (error) {
        console.log(error)
    }

}

// ACTION FOR ANSWER

export const postAnswerAction = (answer) => async (dispatch) => {
    try {
        const { id, noOfAnswer, answerBody, userAnswered, userId } = answer;
        const { data } = await api.postAnswer(id, noOfAnswer, answerBody, userAnswered, userId)
        dispatch({ type: 'POST_ANSWER', payload: data })
        dispatch(getAllquestionAction())

    } catch (error) {
        console.log(error)
    }
}

export const deleteAnswerAction = (id, noOfAnswer, answerId) => async (dispatch) => {
    try {
        const { data } = await api.deleteAnswer(id, noOfAnswer, answerId)
        dispatch(getAllquestionAction())
    } catch (error) {
        console.log(error)
    }

}