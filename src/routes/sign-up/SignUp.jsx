import { useState } from "react"
import apiInstance from "../../services/api/index"
import { useValue } from "../../context/AppProvider"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const [state, dispatch] = useValue()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmitSignUp = (e) => {
        e.preventDefault()

        apiInstance.post('api/auth/signup', {
            firstname: firstName,
            lastname: lastName,
            email,
            password
        })
            .then(response => {
                if (response.data.token) {
                    const userData = {
                        user: response.data.data,
                        token: response.data.token
                    }
                    dispatch({ type: "AUTH", userData })
                    toast.success("Successfully ")
                    navigate("/")
                }
                else{
                    throw new Error("Something went wrong")
                }
            })
            .catch(err => {
                console.log(err)
                toast.error(err.response.data.errors[0].msg)
            })
    }
    return (
        <form className="auth-form" onSubmit={handleSubmitSignUp}>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Firstname' />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Lastname' />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default SignUp