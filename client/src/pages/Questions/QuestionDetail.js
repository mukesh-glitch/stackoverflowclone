import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Upvote from "../../assets/sort-up.svg"
import Downvote from "../../assets/sort-down.svg"
import "../../style/pages/Question.css"
import Avatar from '../../components/Avatar'
import DisplayAnswer from './DisplayAnswer'

const QuestionDetail = () => {

    const { id } = useParams();
    let questionList = [
        {
            id: '1',
            upVotes: 6,
            downVotes: 5,
            vote: 3,
            noOfanswer: 2,
            questionTitle: "What is function",
            questionBody: "it meant to be",
            questionTag: ["java", "python"],
            userPosted: "mukesh",
            askedOn: "jan 1",
            answer: [{
                answerBody: "answer from mukesh",
                userAnswerd: "mukesh",
                answeredOn: " jan 3",
                userId: 2
            }, {
                answerBody: "answer from rounk",
                userAnswerd: "rounak",
                answeredOn: " jan 3",
                userId: 2
            }]
        },
        {
            id: ' 3',
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
            id: '3',
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
                answerBody: "answer from mukesh",
                userAnswerd: "mukesh",
                answeredOn: " jan 3",
                userId: 2
            }]
        }
    ]

    return (
        <div className='quetion-details-page'>
            {
                questionList === null ? <h1>Loading...</h1> :
                    questionList.filter(quetions => quetions.id === id).map(question => (
                        <div key={question.id}>
                            <section className="question-deatil-container" >
                                <h1>{question.questionTitle}</h1>
                                <div className='question-detail-container-2'>
                                    <div className='question-vote'>
                                        <img src={Upvote} alt="upvote" width="18" className='vote-icon' />
                                        <p>{question.upVotes - question.downVotes}</p>
                                        <img src={Downvote} alt="downvote" width="18" className='vote-icon' />
                                    </div>
                                    <div style={{ width: "100%" }} >
                                        <p className='quetion-body'>{question.questionBody}</p>
                                        <div className='question-detail-tags'>
                                            {
                                                question.questionTag.map((tag) => (
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }

                                        </div>
                                        <div className='question-action-user'>
                                            <div>
                                                <button type='button'>Share</button>
                                                <button type='button'>Delete</button>
                                            </div>
                                            <div>
                                                <p>asked {question.askedOn}</p>
                                                <Link to={`User/${question.userId}`} className='user-link'>
                                                    <Avatar backgroundColor="blue" px="10px" py="7px" color="white" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                        {question.userPosted}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>

                            {
                                question.noOfanswer && (
                                    <section>
                                        <h3> {question.noOfanswer} answer </h3>
                                        <DisplayAnswer question={question} />
                                    </section>
                                )
                            }

                            <section className='post-answer-container'>
                                <h3>Your answer</h3>
                                <form >
                                    <textarea name="" id="" cols="38" rows="10"></textarea> <br />
                                    <input type="submit" className='post-ans-btn' value='Post your answer' />
                                </form>
                                <p>Browse other Question tagged
                                    {
                                        question.questionTag.map((tag) => (
                                            <Link to='/Tag' key={tag} className='ans-tag'> {tag} </Link>
                                        ))
                                    } or
                                    <Link to='/AskQuestion' style={{ color: '#009dff' }}>ask your own question</Link>
                                </p>
                            </section>
                        </div>
                    ))
            }
        </div>
    )
}

export default QuestionDetail