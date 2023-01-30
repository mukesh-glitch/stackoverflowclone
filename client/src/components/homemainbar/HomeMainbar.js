import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList'
import '../../style/component/HomeMainbar.css'
import { useSelector } from 'react-redux'
const HomeMainbar = () => {

    const navigate = useNavigate();
    const location = useLocation()

    let user = useSelector((state) => (state.currentUserReducer));
    let questionList = useSelector(state => state.questionReducer)



    const checkAuth = () => {
        if (user === null) {
            alert("Login or signup to ask a question")
            navigate('/Auth')
        }
        else {
            navigate('/askQuestion')
        }
    }



    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1> Top Questions</h1> : <h1>All Questions</h1>
                }
                <button className="ask-btn" onClick={checkAuth}> Ask Question</button>
            </div>
            <div>
                {questionList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{questionList.data.length} questions</p>
                        <QuestionList questionList={questionList.data} />
                    </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar