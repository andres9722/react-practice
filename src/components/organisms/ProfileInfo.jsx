import React from 'react'
import './ProfileInfo.scss'

const ProfileInfo = ({ photoURL, displayName, email }) => (
  <div className='profile'>
    <img className='profile__avatar' src={photoURL} alt='avatar' />
    <p className='profile__username'>{displayName}</p>
    <p className='profile__email'>{email}</p>
    <div className='profile__tuits'>
      <p className='profile__tuits-title'>Tuits</p>
      <h3 className='profile__tuits-number'>1</h3>
    </div>
  </div>
)

export default ProfileInfo
