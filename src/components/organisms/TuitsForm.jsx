import React from 'react'
import Input from '../atoms/Input'
import './TuitsForm.scss'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TuitsForm = ({ photoURL, displayName, uid }) => {
  const database = firebase.firestore()
  const settings = { timestampsInSnapshots: true }
  database.settings(settings)

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    const text = form.tuit.value
    const tuit = { text, displayName, photoURL, uid, date: Date.now() }

    database
      .collection('tuits')
      .add(tuit)
      .then(docRef => {
        toast('tuit create correctly !', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 2000
        })
      })
      .catch(() => {
        toast.error('tuit create failed !', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
    form.reset()
  }

  return (
    <form className='tuitform' onSubmit={handleOnSubmit}>
      <img className='tuitform__avatar' src={photoURL} alt='Avatar' />
      <Input
        id='tuit'
        name='tuit'
        placeholder="What's happening?"
        autoComplete='off'
        maxLength='140'
      />
      <ToastContainer />
    </form>
  )
}

export default TuitsForm
