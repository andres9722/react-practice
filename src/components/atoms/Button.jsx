import React from 'react'
import './Button.scss'

const Button = ({ children, classN, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${classN || ''}`}>
      {children}
    </button>
  )
}

export default Button
