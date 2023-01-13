import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/component/HomeMainbar.css'
import moment from 'moment'

const Questions = ({ question }) => {
    return (
        <div className='display-questions-container'>
            <div className='display-votes-ans'>
                <p>{question.upVote.length + question.downVote.length}</p>
                <p>Votes</p>
            </div>
            <div className='display-votes-ans'>
                <p>{question.noOfAnswer}</p>
                <p>answer</p>
            </div>
            <div className='display-question-detail'>
                <Link to={`/Questions/${question._id}`} className=' quetion-title-link'>{question.questionTitle}</Link>
                <div className='display-tags-time'>
                    <div className='quetion-tags'>
                        {
                            question.questionTags.map((tag, index) => (
                                <p key={index}> {tag} </p>
                            ))
                        }

                    </div>
                    <p className='display-time'>
                        asked {moment(question.postedOn).fromNow()} {question.userPosted}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Questions