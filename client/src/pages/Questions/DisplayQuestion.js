import React from 'react'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import QuestionDetail from './QuestionDetail'
import "../../style/pages/Question.css"
import "../../App.css"

const DisplayQuestion = () => {

    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className='home-container-2'>
                <QuestionDetail />
                <Rightsidebar />
            </div>

        </div>
    )
}

export default DisplayQuestion