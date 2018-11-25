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
    database.collection('tuits').onSnapshot(querySnapshot => {
      let arr = []
      querySnapshot.forEach(function (doc) {
        arr.push(doc.data())
        setTuits(arr)
      })
    })
  }, [])

  return (
    <div className='tuits__container'>
      <ul className='tuits__list'>
        {!tuits.length && <Loader />}
        {tuits.map(tuit => <Tuit key={tuit.text} {...tuit} />)}
      </ul>
    </div>
  )
}

export default TuitsList
