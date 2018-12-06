import React, { useContext, useState } from 'react'
import Input from '../atoms/Input'
import { Link } from 'react-router-dom'
import { AuthContext as Context } from '../../providers/AuthProvider'
import Button from '../atoms/Button.jsx'
import './Aside.scss'

const Aside = () => {
  const { onSignOut, user } = useContext(Context)
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => setShowMenu(!showMenu)

  let username = user.displayName
    .split(' ')
    .slice(0, 2)
    .join(' ')

  return (
    <aside className='aside'>
      <div className='aside__search'>
        <Input
          autoComplete='off'
          id='search'
          name='search'
          placeholder='Search tuit'
          theme='input__main--secondary'
        />
      </div>
      <div className='aside__profile'>
        <img
          className='aside__profile-image'
          src={user.photoURL}
          alt='avatar'
          onClick={handleShowMenu}
        />
        {showMenu && (
          <div className='aside__profile-menu'>
            <Link
              className='aside__profile-username'
              to={`/dashboard/profile/${username.trim()}`}
            >
              {username}
            </Link>
            <Button onClick={() => onSignOut()}>Sign out</Button>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Aside
