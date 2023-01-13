import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'
const UserList = () => {
  const allUsers = useSelector((state) => state.userReducer)
  return (
    <div className='userlist-container'>
      {
        allUsers.map((users) => (
          <User key={users._id} user={users} />
        ))
      }
    </div>
  )
}

export default UserList