import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProfileAction } from '../../actions/user'
import '../../style/pages/UserProfile.css'
const EditProfileFrom = ({ currentUser, setSwitch }) => {

    const dispatch = useDispatch()
    const [Name, setName] = useState(currentUser?.name)
    const [About, setAbout] = useState(currentUser?.about)
    const [Tags, setTags] = useState(currentUser?.tags)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (Tags.length === 0) {
            dispatch(updateProfileAction(currentUser?._id, { 'name': Name, 'about': About }))
        } else {
            dispatch(updateProfileAction(currentUser?._id, { 'name': Name, 'about': About, 'tags': Tags }))

        }
        setSwitch(false)
    }
    return (
        <div>
            <h1 className='edit-profile-title'>Edit Your Profile</h1>
            <h2 className='edit-profile-title-2'>Public information</h2>
            <form onSubmit={handleSubmit} className='edit-profile-form'>
                <label htmlFor='name'>
                    <h3>Display name</h3>
                    <input type="text" value={Name} name="name" onChange={(e) => setName(e.target.value)} />
                </label>
                <label htmlFor='about'>
                    <h3>About Me</h3>
                    <textarea name="about" value={About} id="about" cols="30" rows="10" onChange={(e) => setAbout(e.target.value)} ></textarea>
                </label>
                <label htmlFor='tags'>
                    <h3>Watched Tags</h3>
                    <p>Add tags seperated by 1 space</p>
                    <input type="text" name="tags" onChange={(e) => setTags(e.target.value.split(' '))} />
                </label>
                <br />
                <input type='submit' value='Save profile' className='user-submit-btn' />
            </form>
        </div>
    )
}

export default EditProfileFrom