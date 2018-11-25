import React from 'react'
import './Tuit.scss'
import TimeAgo from 'react-timeago'

const Tuit = ({ text, photoURL, displayName, date }) => {
  return (
    <div className='tuit'>
      <img className='tuit__img' src={photoURL} alt='avatar' />
      <div className='tuit__info'>
        <h5 className='tuit__username'>
          {displayName} <TimeAgo date={date} />
        </h5>
        <p className='tuit__text'>{text}</p>
      </div>
    </div>
  )
}

export default Tuit
