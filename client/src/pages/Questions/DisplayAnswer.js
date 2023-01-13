import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Avatar from '../../components/Avatar'
import "../../style/pages/Question.css"
import { useDispatch } from 'react-redux'
import { deleteAnswerAction } from '../../actions/askQuestion'
const DisplayAnswer = ({ question, handleShare, user, id }) => {

    const disptach = useDispatch()

    const handleDeleteAnswer = (answerId, noOfAnswer) => {
        disptach(deleteAnswerAction(id, answerId, noOfAnswer - 1))
        console.log(user.result.id)
    }
    return (
        <div>{
            question.answer.map((ans, index) => (
                <div className='display-ans' key={index}>
                    <p className='ans-body'>{ans.answerBody}</p>
                    <div className='question-action-user'>
                        <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                                user?.result?._id === ans?.userId && (
                                    <button type='button' onClick={() => handleDeleteAnswer(ans._id, question.noOfAnswer)}>Delete</button>)
                            }
                        </div>
                        <div>
                            <p> answered on {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`User/${question.userId}`} className='user-link'>
                                <Avatar backgroundColor="blue" px="10px" py="7px" color="white" >{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                    {ans.userAnswered}
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            ))
        }</div>
    )
}

export default DisplayAnswer