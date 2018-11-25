import React, { Fragment, useContext } from 'react'
import Page from './Page'
import Header from '../organisms/Header'
import ProfileInfo from '../organisms/ProfileInfo'
import { AuthContext as Context } from '../../providers/AuthProvider'
import './Dashboard.scss'
import Tuits from '../templates/Tuits'

const Dashboard = () => {
  const { user } = useContext(Context)

  return (
    <Fragment>
      <Header />
      <Page>
        <div className='dashboard'>
          <ProfileInfo {...user} />
          <Tuits {...user} />
        </div>
      </Page>
    </Fragment>
  )
}

export default Dashboard
