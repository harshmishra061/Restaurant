import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

const Home = () => {
    const { removeToken } = useContext(AuthContext)
    return (
        <>
            <Typography variant="h4" textAlign={'center'}>
                Welcome to the Home Page
            </Typography>
            <Button variant="contained" color="primary" onClick={removeToken}>
                Logout
            </Button>
        </>
    )
}

export default Home
