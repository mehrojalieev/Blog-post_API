import { useState } from "react"
import apiInstance from "../../services/api/index"
const SignUp = () => {
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
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
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