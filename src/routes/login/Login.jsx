import "./Login.scss"
import apiInstanse from '../../services/api/index'
import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useValue } from '../../context/AppProvider';

const Login = () => {
  const [state, dispatch] = useValue()
  const notify = () => toast.success("Successfully", {toastId: "customId"})
  const notifyError = () => toast.error("Password or Email is Invalid",  {toastId: "customId"})


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
            const userData = {
              user: response.data.data,
                    token: response.data.token
            }
            dispatch({type: "AUTH", userData})
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