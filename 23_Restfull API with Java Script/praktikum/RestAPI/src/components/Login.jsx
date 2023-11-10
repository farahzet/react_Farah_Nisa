import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const navigate = useNavigate() 

    const handleClickLogin = (e) => {
        e.preventDefault()
        if(email === 'farah@gmail.com' && password === 'farah123'){
            localStorage.setItem(email, 'true')
            alert('Login Succesfully!')
            navigate('/form')
        }
        setError('Email atau Password Salah')
    }

    return (
        <div className="awesome">
            <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                Email address
                </label>
                <input
                type="email"
                value={email}
                className="form-control"
                id="email"
                placeholder="Masukkan email
                "
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                Password
                </label>
                <input
                type="password"
                value={password}
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e) => handleClickLogin(e)}>
                Submit
            </button>
            </form>
        </div>
    )
}

export default Login