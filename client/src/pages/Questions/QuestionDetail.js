import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Upvote from "../../assets/sort-up.svg"
import Downvote from "../../assets/sort-down.svg"
import "../../style/pages/Question.css"
import Avatar from '../../components/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { useSelector } from 'react-redux'

const QuestionDetail = () => {

    const { id } = useParams();
    const questionList = useSelector(state => state.questionReducer)
    console.log(questionList)
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
                                        <img src={Upvote} alt="upvote" width="18" className='vote-icon' />
                                        <p>{question.upVotes - question.downVotes}</p>
                                        <img src={Downvote} alt="downvote" width="18" className='vote-icon' />
                                    </div>
                                    <div style={{ width: "100%" }} >
                                        <p className='quetion-body'>{question.questionBody}</p>
                                        <div className='question-detail-tags'>
                                            {
                                                question.questionTags.map((tag) => (
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
                                        <h3> {question.noOfAnswer} answer </h3>
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