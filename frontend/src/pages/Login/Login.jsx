import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Grid2 as Grid, Link, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { AuthContext } from '../../contexts/authContext'
const Login = () => {
    const API_URL = import.meta.env.VITE_BACKEND_URL;
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const {addToken} = useContext(AuthContext)

    const loginUser = async () => {
        console.log(data);
        try {
            const url = `${API_URL}login`;
            const response = await axios.post(
                url,
                data
            )
            let token = 'abcdef'
            addToken(token)
            navigate('/')
        } catch (error) {
            setError(error.response.data)
        }
    }
    return (
        <Grid
            direction={'column'}
            container
            gap={2}
            width={'20%'}
            margin={'auto'}
            marginTop={10}
        >
            <Typography variant="h4" textAlign={'center'}>
                LOGIN
            </Typography>
            <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <TextField
                id="filled-basic"
                label="Password"
                variant="filled"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <Button variant="contained" onClick={loginUser}>
                LOGIN
            </Button>
            <Typography variant="body1" textAlign={'center'}>
                Create an account ? <Link href="/signup">Signup</Link>
            </Typography>
            <Typography variant="body1" color={'error'} textAlign={'center'}>
                {error}
            </Typography>

        </Grid>
    )
}

export default Login
