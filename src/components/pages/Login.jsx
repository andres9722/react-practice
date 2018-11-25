import React, { useContext, useEffect, useRef } from 'react'
import image from '../../assets/loginbg.jpg'
import './Login.scss'
import Button from '../atoms/Button'
import { AuthContext as Context } from '../../providers/AuthProvider'
import VanillaTilt from 'vanilla-tilt'

const Login = () => {
  const { onLogin } = useContext(Context)
  const tiltRef = useRef()

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 5,
      speed: 200,
      glare: true,
      'max-glare': 0.25
    })

    return () => tiltRef.current.vanillaTilt.destroy()
  }, [])

  return (
    <div className='login'>
      <div ref={tiltRef} className='login__tilt'>
        <img className='login__image' src={image} alt='Login background' />
      </div>
      <Button classN='login__button' onClick={() => onLogin()}>Login</Button>
    </div>
  )
}

export default Login
