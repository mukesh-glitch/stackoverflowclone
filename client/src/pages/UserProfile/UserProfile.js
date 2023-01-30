import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import Avatar from '../../components/Avatar'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import EditProfileFrom from './EditProfileFrom'
import ProfileBio from './ProfileBio'
import '../../style/pages/UserProfile.css'

const UserProfile = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.userReducer)
    const [Switch, setSwitch] = useState(false)
    const currentProfile = users.filter((users) => users._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)


    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className='home-container-2' >
                <section style={{ padding: '10px' }}>

                    <div className='user-details-container'>
                        <div className='user-details'>
                            <Avatar backgroundColor="purple" color='white' fontSize='50px' px='40px' py='30px'>
                                {currentProfile?.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className='user-name'>
                                <h1>{currentProfile?.name}</h1>
                                <p><FontAwesomeIcon icon={faBirthdayCake} /> joined on {moment(currentProfile?.joinedon).fromNow()}</p>
                            </div>
                        </div>
                        <div>
                            {currentUser?.result?._id === id && (
                                <>
                                    {
                                        Switch ? <button className='user-edit-btn' onClick={() => { setSwitch(!Switch) }}> cancel</button> : <button className='user-edit-btn' type='button' onClick={() => { setSwitch(!Switch) }}>
                                            <FontAwesomeIcon icon={faPen} /> Edit profile
                                        </button>
                                    }

                                </>
                            )}
                        </div>
                    </div>

                    <div>
                        {
                            Switch ? <EditProfileFrom currentUser={currentProfile} setSwitch={setSwitch} /> : <ProfileBio currentProfile={currentProfile} />
                        }
                    </div>
                </section>
            </div>

        </div>
    )
}

export default UserProfile