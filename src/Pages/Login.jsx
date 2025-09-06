
import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Componentes/NavBar'




const validEmails = ['user1@example.com', 'user2@example.com']
const validPasswords = ['pass123', 'pass456']


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const { isAuthenticated, setIsAuth} = useContext(Context)
    const navigate = useNavigate()



    const handleLogin = (e) => {
        
        const isAuthenticated = localStorage.getItem('Auth') === 'true'
        if (isAuthenticated) {
            setIsAuth(true)
            navigate('/admin')
        }
        e.preventDefault()

        if (validEmails.includes(email) && validPasswords.includes(password)) {
            setMessage('¡Inicio de sesión exitoso!')
            setIsAuth(true)
            navigate('/admin')
            localStorage.setItem('Auth', true)
        } else {
            setMessage('Correo electrónico o contraseña incorrectos.')
            setIsAuth(false)
        }
    }



    return (
       <> <NavBar/>
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: 'auto',marginTop:'25px', textAlign: 'center' }}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button
                    type="submit"
                    style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}
                >
                    Entrar
                </button>
            </form>
            {message && (
                <p style={{ marginTop: '15px', color: isAuthenticated ? 'green' : 'red' }}>
                    {message}
                </p>
            )}
        </div></>
    )
}

export default Login