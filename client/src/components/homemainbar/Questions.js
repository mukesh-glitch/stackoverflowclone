import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/component/HomeMainbar.css'
const Questions = ({ question }) => {
    return (
        <div className='display-questions-container'>
            <div className='display-votes-ans'>
                <p>{question.vote}</p>
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
                        asked {question.askedOn} {question.userPosted}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Questions