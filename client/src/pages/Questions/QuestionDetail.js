import React, { useState } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import Upvote from "../../assets/sort-up.svg"
import Downvote from "../../assets/sort-down.svg"
import "../../style/pages/Question.css"
import Avatar from '../../components/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { deleteQuestionAction, postAnswerAction, voteQuestionAction } from '../../actions/askQuestion'


const QuestionDetail = () => {


    const [Answer, setAnswer] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation()

    const url = 'http://localhost:3000'

    const questionList = useSelector(state => state.questionReducer)
    let user = useSelector((state) => (state.currentUserReducer));

    const handlePost = (e, answerLength) => {
        e.preventDefault();
        console.log(questionList)
        if (user === null) {
            alert('Login or SIgnup to anser a question')
            navigate('/Auth')
        } else {
            if (Answer === '') {
                alert('enter answer for posting your answer')
            }
            dispatch(postAnswerAction({ id, noOfAnswer: answerLength + 1, answerBody: Answer, userAnswered: user.result.name, userId: user.result._id }))
        }
        console.log({ noOfanswer: answerLength + 1 })
    }


    // FUCTIONS FOR SHARE AND DELETE QUESTION USER LOGIN REQUIRED FOR DELETE QUESTION
    const handleShare = () => {
        copy(url + location.pathname)
        alert('Copied url :' + url + location.pathname)

    }
    const handleQuestionDelete = () => {

        dispatch(deleteQuestionAction(id, navigate))
    }


    // FUNCTION FOR VOTING QUESTION
    const handleUpVote = () => {
        if (user === null) {
            alert('login or signup for vote a question')
            navigate('/Auth')
        } else {
            dispatch(voteQuestionAction(id, 'upVote', user.result._id))

        }
    }

    const handleDownVote = () => {
        if (user === null) {
            alert('login or signup for vote a question')
            navigate('/Auth')
        } else {
            dispatch(voteQuestionAction(id, 'downVote', user.result._id))
        }
    }
    return (
        <div className='quetion-details-page'>
            {
                questionList.data === null ? <h1>Loading...</h1> :
                    questionList.data.filter(questions => questions._id === id).map(question => (
                        <div key={question._id}>
                            <section className="question-deatil-container" >
                                <h1>{question.questionTitle}</h1>
                                <div className='question-detail-container-2'>
                                    <div className='question-vote'>
                                        <img src={Upvote} onClick={handleUpVote} alt="upvote" width="18" className='vote-icon' />
                                        <p>{question.upVote.length - question.downVote.length}</p>
                                        <img src={Downvote} onClick={handleDownVote} alt="downvote" width="18" className='vote-icon' />
                                    </div>
                                    <div style={{ width: "100%" }} >
                                        <p className='quetion-body'>{question.questionBody}</p>
                                        <div className='question-detail-tags'>
                                            {
                                                question.questionTags.map((tag, index) => (
                                                    <p key={index}>{tag}</p>
                                                ))
                                            }

                                        </div>
                                        <div className='question-action-user'>
                                            <div>
                                                <button type='button' onClick={handleShare}>Share</button>
                                                {
                                                    user?.result._id === question.userId && (<button type='button' onClick={handleQuestionDelete}>Delete</button>)
                                                }
                                            </div>
                                            <div>
                                                <p>asked {moment(question.postedOn).fromNow()}</p>
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
                                question.noOfAnswer && (
                                    <section>
                                        <h3> {question.noOfAnswer} Answer </h3>
                                        <DisplayAnswer question={question} handleShare={handleShare} user={user} id={id} />
                                    </section>
                                )
                            }

                            <section className='post-answer-container'>
                                <h3>Your answer</h3>
                                <form onSubmit={(e) => { handlePost(e, question.answer.length) }}>
                                    <textarea name="Answer" value={Answer} id="" cols="38" rows="10" onChange={e => setAnswer(e.target.value)}></textarea> <br />
                                    <input type="submit" className='post-ans-btn' value='Post your answer' />
                                </form>
                                <p>Browse other Question tagged
                                    {
                                        question.questionTags.map((tag) => (
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