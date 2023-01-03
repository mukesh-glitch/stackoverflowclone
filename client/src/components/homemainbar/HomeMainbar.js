import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import QuestionList from './QuestionList'
import '../../style/component/HomeMainbar.css'
const HomeMainbar = () => {

    let questionList = [
        {
            id: 1,
            upVotes: 2,
            downVotes: 3,
            vote: 3,
            noOfanswer: 2,
            questionTitle: "What is function",
            questionBody: "it meant to be",
            questionTag: ["java", "python"],
            userPosted: "mukesh",
            askedOn: "jan 1",
            answer: [{
                answerBody: "answer",
                userAnswerd: "mukesh",
                answeredOn: " jan 3",
                userId: 2
            }]
        },
        {
            id: 1,
            upVotes: 2,
            downVotes: 3,
            vote: 3,
            noOfanswer: 2,
            questionTitle: "What is function",
            questionBody: "it meant to be",
            questionTag: ["java", "python"],
            userPosted: "mukesh",
            askedOn: "jan 1",
            answer: [{
                answerBody: "answer",
                userAnswerd: "mukesh",
                answeredOn: " jan 3",
                userId: 2
            }]
        },
        {
            id: 1,
            upVotes: 2,
            downVotes: 3,
            vote: 3,
            noOfanswer: 2,
            questionTitle: "What is function",
            questionBody: "it meant to be",
            questionTag: ["java", "python"],
            userPosted: "mukesh",
            askedOn: "jan 1",
            answer: [{
                answerBody: "answer",
                userAnswerd: "mukesh",
                answeredOn: " jan 3",
                userId: 2
            }]
        }
    ]
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
                {questionList === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{questionList.length} questions</p>
                        <QuestionList questionList={questionList} />
                    </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar