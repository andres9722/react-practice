import React from 'react'
import './Button.scss'

const Button = ({ children, theme, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${theme || ''}`}>
      {children}
    </button>
  )
}

export default Button
