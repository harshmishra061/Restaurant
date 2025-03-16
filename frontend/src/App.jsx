import Button from '@mui/material/Button'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import { Routes, Route, Navigate } from 'react-router'
import Home from './pages/Home/Home'
import { useContext } from 'react'
import { AuthContext } from './contexts/authContext'

const PublicRoute = ({ children }) => {
    const { isAuthed } = useContext(AuthContext)
    return !isAuthed() ? children : <Navigate to="/" replace />
}

const ProtectedRoute = ({ children }) => {
    const { isAuthed } = useContext(AuthContext)
    return isAuthed() ? children : <Navigate to="/signup" replace />
}

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/signup"
                element={
                    <PublicRoute>
                        <Signup />
                    </PublicRoute>
                }
            />
        </Routes>
    )
}

export default App
