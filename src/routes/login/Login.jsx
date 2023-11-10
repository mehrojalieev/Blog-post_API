import apiInstanse from '../../services/api/index'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const notify = () => toast.success("Successfully", {toastId: "customId"})
  const notifyError = () => toast.error("Password or Email is Invalid",  {toastId: "customId"})

  const { token, setToken } = useContext(AppContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUserLogin = (e) => {
    e.preventDefault()
    apiInstanse.post('api/auth/login', {
      email,
      password
    })
      .then(response => {
        console.log(response.data)
        if (response.data.token) {
          notify()
          localStorage.setItem("user-token", JSON.stringify(response.data.token))
          localStorage.setItem("user-email", JSON.stringify(response.data.data.email))
          setToken(response.data.token)
          setTimeout(() => {
            window.location.pathname = "/"
          }, 2000)
        } else {
          console.log(false);
        }
      })
      .catch(err => notifyError())


  }
  return (
    <form className="auth-form" onSubmit={handleUserLogin}>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <button type='submit'>Login</button>
      <ToastContainer position='top-center' style={{width: "400px"}} />
    </form>
  )
}

export default Login