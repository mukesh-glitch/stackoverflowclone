import React from 'react'
import Questions from './Questions'
import '../../style/component/HomeMainbar.css'
const QuestionList = ({ questionList }) => {
    return (
        <>
            {

                questionList && questionList.map((question) => (
                    <Questions question={question} key={question._id} />
                ))
            }
        </>
    )
}

export default QuestionList