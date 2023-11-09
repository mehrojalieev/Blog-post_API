import apiInstanse from '../../services/api/index'
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUserLogin = (e) => {
    e.preventDefault()

    apiInstanse.post('api/auth/login', {

      email,
      password
    })
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
  }
  return (
    <form className="auth-form" onSubmit={handleUserLogin}>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login