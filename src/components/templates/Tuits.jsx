import React from 'react'
import TuitsForm from '../organisms/TuitsForm'
import TuitsList from '../organisms/TuitsList'

const Tuits = user => {
  return (
    <div className='tuits'>
      <TuitsForm {...user} />
      <TuitsList />
    </div>
  )
}

export default Tuits
