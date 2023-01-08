import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import QuestionList from './QuestionList'
import '../../style/component/HomeMainbar.css'
import { useSelector } from 'react-redux'
const HomeMainbar = () => {

    let questionList = useSelector(state => state.questionReducer)
    console.log({ homemainbar: questionList })
    const location = useLocation()

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1> Top Questions</h1> : <h1>All Questions</h1>
                }
                <Link to='/AskQuestion' className="ask-btn"> Ask Question</Link>
            </div>
            <div>
                {questionList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{questionList.length} questions</p>
                        <QuestionList questionList={questionList.data} />
                    </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar