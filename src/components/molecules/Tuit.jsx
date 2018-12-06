import React, { useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './Tuit.scss'
import TimeAgo from 'react-timeago'
import Button from '../atoms/Button'
import heart from '../../assets/heart.png'
import like from '../../assets/like.png'
import noRetuit from '../../assets/exchange (1).png'
import retuit from '../../assets/exchange.png'
import { AuthContext as Context } from '../../providers/AuthProvider'
import InteractionTuitsInfo from '../atoms/InteractionTuitsInfo'

const Tuit = ({ text, photoURL, displayName, date, likes, retuits, id }) => {
  const { user } = useContext(Context)
  const database = firebase.firestore()
  const settings = { timestampsInSnapshots: true }
  database.settings(settings)

  const findLikes = likes =>
    likes.find(like => like.displayName === user.displayName)

  const findLikesTuit = findLikes(likes)
  const findRetuits = findLikes(retuits)

  const handleAddLike = async id => {
    const docRef = database.collection('tuits').doc(id)

    try {
      await database.runTransaction(async transaction => {
        const sfDoc = await transaction.get(docRef)
        let likes = sfDoc.data().likes
        let find = findLikes(likes)
        if (find) {
          likes = likes.filter(like => like.displayName !== user.displayName)
        } else {
          likes.push({ displayName: user.displayName })
        }
        transaction.update(docRef, { likes: likes })
      })
    } catch (error) {
      console.log('Transaction failed: ', error)
    }
  }

  const handleRetuit = async () => {
    const docRef = database.collection('tuits').doc(id)

    try {
      await database.runTransaction(async transaction => {
        const sfDoc = await transaction.get(docRef)
        let retuits = sfDoc.data().retuits
        let find = findLikes(retuits)
        if (find) {
          retuits = retuits.filter(
            like => like.displayName !== user.displayName
          )
        } else {
          retuits.push({ displayName: user.displayName })
        }
        transaction.update(docRef, { retuits: retuits })
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
          {displayName}
          <TimeAgo date={date} />
        </h5>
        <p className='tuit__text'>{text}</p>
        <div className='tuit__details'>
          <Button theme='button--like' onClick={() => handleAddLike(id)}>
            {findLikesTuit ? (
              <img className='tuit__like' src={like} alt='like' />
            ) : (
              <img className='tuit__like' src={heart} alt='like' />
            )}
          </Button>
          <Button theme='button--like' onClick={() => handleRetuit(id)}>
            {findRetuits ? (
              <img className='tuit__like' src={retuit} alt='retuit' />
            ) : (
              <img className='tuit__like' src={noRetuit} alt='retuit' />
            )}
          </Button>
        </div>
        <InteractionTuitsInfo
          likes={likes}
          retuits={retuits}
          classNameLikes='tuit__like-count'
          classNameRetuits='tuit__like-countrt'
        />
      </div>
    </div>
  )
}

export default Tuit
