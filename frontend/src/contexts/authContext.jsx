import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null)

    const addToken = (token) => {
        localStorage.setItem('token', token)
        setToken(token)
    }

    const removeToken = () => {
        localStorage.removeItem('token')
        setToken(null)
    }

    const isAuthed = () => {
        return token !== null
    }

    return (
        <AuthContext.Provider value={{ isAuthed, addToken, removeToken }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
