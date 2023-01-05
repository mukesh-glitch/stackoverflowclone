import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar'
import "../../style/pages/Question.css"

const DisplayAnswer = ({ question }) => {
    return (
        <div>{
            question.answer.map((ans) => (
                <div className='display-ans' key={ans.userId}>
                    <p className='ans-body'>{ans.answerBody}</p>
                    <div className='question-action-user'>
                        <div>
                            <button type='button'>Share</button>
                            <button type='button'>Delete</button>
                        </div>
                        <div>
                            <p> answered on  {ans.answeredOn}</p>
                            <Link to={`User/${question.userId}`} className='user-link'>
                                <Avatar backgroundColor="blue" px="10px" py="7px" color="white" >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                    {question.userPosted}
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