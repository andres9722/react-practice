import React, { useContext } from 'react'
import Page from './Page'
import { AuthContext as Context } from '../../providers/AuthProvider'
import Button from '../atoms/Button'

const Dashboard = () => {
  const { onSignOut, user } = useContext(Context)

  return (
    <Page>
      <h1>Dashboard</h1>
      <Button onClick={() => onSignOut()} classN='button--secondary'>
        Sign Out
      </Button>
      <strong>
        <pre>Hello. </pre>{user.displayName}
      </strong>
      <img style={{ width: '200px' }} src={user.photoURL} alt='avatar' />
    </Page>
  )
}

export default Dashboard
