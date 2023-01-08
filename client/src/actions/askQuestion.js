import * as api from '../api'


export const askQuestionAction = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: "POST_QUESTION", payload: data })
        await dispatch(getAllquestionAction())
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