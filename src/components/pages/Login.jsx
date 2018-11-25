import React, { useContext } from 'react'
import image from '../../assets/loginbg.jpg'
import './Login.scss'
import Button from '../atoms/Button'
import { AuthContext as Context } from '../../providers/AuthProvider'

const Login = () => {
  const { loading, onLogin } = useContext(Context)

  return (
    <div className='login'>
      <img className='login__image' src={image} alt='Login background' />
      <Button classN='login__button' onClick={() => onLogin()}>
        {loading ? 'Loading...' : 'Login'}
      </Button>
    </div>
  )
}

export default Login
