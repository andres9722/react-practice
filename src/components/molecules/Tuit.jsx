import React, { useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './Tuit.scss'
import TimeAgo from 'react-timeago'
import Button from '../atoms/Button'
import heart from '../../assets/heart.png'
import like from '../../assets/like.png'
import { AuthContext as Context } from '../../providers/AuthProvider'

const Tuit = ({ text, photoURL, displayName, date, likes, id }) => {
  const { user } = useContext(Context)
  const database = firebase.firestore()
  const settings = { timestampsInSnapshots: true }
  database.settings(settings)

  const find = likes.find(like => like.displayName === user.displayName)

  const handleAddLike = async id => {
    const docRef = database.collection('tuits').doc(id)

    try {
      await database.runTransaction(async transaction => {
        const sfDoc = await transaction.get(docRef)
        let newLikes = sfDoc.data().likes
        let find = newLikes.find(like => like.displayName === user.displayName)
        if (find) {
          newLikes = newLikes.filter(
            like => like.displayName !== user.displayName
          )
        } else {
          newLikes.push({ displayName: user.displayName })
        }
        transaction.update(docRef, { likes: newLikes })
      })
    } catch (error) {
      console.log('Transaction failed: ', error)
    }
  }

  return (
    <div className='tuit'>
      <img className='tuit__img' src={photoURL} alt='avatar' />
      <div className='tuit__info'>
        <h5 className='tuit__username'>
          {displayName} <TimeAgo date={date} />
        </h5>
        <p className='tuit__text'>{text}</p>
        <Button theme='button--like' onClick={() => handleAddLike(id)}>
          {find
            ? <img className='tuit__like' src={like} alt='like' />
            : <img className='tuit__like' src={heart} alt='like' />}
        </Button>
        <span className='tuit__like-count'>{likes && likes.length} </span>
      </div>
    </div>
  )
}

export default Tuit
