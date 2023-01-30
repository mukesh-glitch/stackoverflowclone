import React, { useEffect, useState } from 'react'
import '../style/pages/AskQuetion.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { askQuestionAction } from '../actions/askQuestion';


const AskQuestion = () => {

    const [questionInput, setQuestionInput] = useState({ questionTitle: " ", questionBody: "", questionTags: '' })
    const navigate = useNavigate();
    const dispatch = useDispatch()
    let user = useSelector((state) => (state.currentUserReducer));


    const handleChange = (e) => {
        setQuestionInput({ ...questionInput, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(questionInput)
        dispatch(askQuestionAction({ ...questionInput, userPosted: user.result.name, userId: user.result._id }, navigate))

    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setQuestionInput({ ...questionInput, questionBody: questionInput.questionBody + "\n" })
        }
    }

    return (

        <div className='ask-question'>
            <div className='ask-question-container'>
                <h1>Ask a public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className='ask-form-container'>
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you'r asking a question to another person</p>
                            <input type="text" name="questionTitle" onChange={handleChange} id='ask-ques-title' placeholder='e.g. is there an r function for finding the index of an element in a vector' required />
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea type="text" name='questionBody' onChange={handleChange} id='ask-ques-body ' onKeyPress={handleEnter} cols="30" rows="10" required />
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Be specific and imagine you'r asking a question to another person</p>
                            <input type="text" name="questionTags" onChange={(e) => { setQuestionInput({ ...questionInput, questionTags: (e.target.value).split(' ') }) }} id='ask-ques-tags' placeholder='e.g.  java , python' />
                        </label>
                    </div>
                    <input type="submit" value=" Reveiw your question" className='review-btn' />
                </form>
            </div>
        </div>

    )
}

export default AskQuestion