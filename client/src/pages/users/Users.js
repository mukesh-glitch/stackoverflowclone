import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import UserList from './UserList'
import '../../style/pages/User.css'
const Users = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar />
      <div className='home-container-2'>
        <UserList />
      </div>
    </div>
  )
}

export default Users