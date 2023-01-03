import React, { useEffect } from 'react'
import '../style/pages/AskQuetion.css'
import { useNavigate } from "react-router-dom";



const AskQuestion = () => {

    useEffect(() => {
        return user === null ? redirect : navigate('/AskQuestion')
    }, [])

    const user = 1;
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/Auth')
        alert("Login or signup to ask a question")

    }




    return (

        <div className='ask-question'>
            <div className='ask-question-container'>
                <h1>Ask a public Question</h1>
                <form action="">
                    <div className='ask-form-container'>
                        <label htmlFor="ask-ques-title">
                            <h4>Title</h4>
                            <p>Be specific and imagine you'r asking a question to another person</p>
                            <input type="text" id='ask-ques-title' placeholder='e.g. is there an r function for finding the index of an element in a vector' />
                        </label>
                        <label htmlFor="ask-ques-body">
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea type="text" id='ask-ques-body ' cols="30" rows="10" />
                        </label>
                        <label htmlFor="ask-ques-tags">
                            <h4>Tags</h4>
                            <p>Be specific and imagine you'r asking a question to another person</p>
                            <input type="text" id='ask-ques-tags' placeholder='e.g.  java , python' />
                        </label>
                    </div>
                    <input type="submit" value=" Reveiw your question" className='review-btn' />
                </form>
            </div>
        </div>

    )
}

export default AskQuestion