import React from 'react'
import Leftsidebar from '../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../components/Rightsidebar/Rightsidebar'
import "../App.css"
import HomeMainbar from '../components/homemainbar/HomeMainbar'

const Home = () => {


    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className='home-container-2'>
                <HomeMainbar />
                <Rightsidebar />
            </div>

        </div>

    )
}

export default Home