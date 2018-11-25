import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

const Menu = () => (
  <nav className='nav'>
    <ul className='menu'>
      <li className='menu__item'>
        <NavLink
          to='/dashboard'
          className='menu__link'
          activeClassName='menu__link--active'
        >
          Home
        </NavLink>
      </li>
      <li className='menu__item'>
        <NavLink
          to='/notifications'
          className='menu__link'
          activeClassName='menu__link--active'
        >
          Notifications
        </NavLink>
      </li>
      <li className='menu__item'>
        <NavLink
          to='/messages'
          className='menu__link'
          activeClassName='menu__link--active'
        >
          Messages
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Menu
