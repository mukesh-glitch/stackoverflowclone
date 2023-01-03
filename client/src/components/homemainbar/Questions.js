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
                <p>{question.noOfanswer}</p>
                <p>answer</p>
            </div>
            <div className='display-question-detail'>
                <Link to={`/Questions/${question.id}`} className=' quetion-title-link'>{question.questionTitle}</Link>
                <div className='display-tags-time'>
                    <div className='quetion-tags'>
                        {
                            question.questionTag.map((tag) => (
                                <p key={tag}> {tag} </p>
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