import React, { useState, useEffect } from 'react'
import Loader from '../atoms/Loader'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Tuit from '../molecules/Tuit'
import './TuitsList.scss'

const TuitsList = () => {
  const [tuits, setTuits] = useState([])
  const database = firebase.firestore()
  const settings = { timestampsInSnapshots: true }
  database.settings(settings)

  useEffect(() => {
    database
      .collection('tuits')
      .orderBy('date', 'desc')
      .onSnapshot(querySnapshot => {
        let arr = []
        querySnapshot.forEach(function (doc) {
          arr.push({ ...doc.data(), id: doc.id })
          setTuits(arr)
        })
      })
  }, [])

  return (
    <div className='tuits__container'>
      <ul className='tuits__list'>
        {!tuits.length && <Loader />}
        {tuits.map((tuit, i) => <Tuit key={i} {...tuit} />)}
      </ul>
    </div>
  )
}

export default TuitsList
