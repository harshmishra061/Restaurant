import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Grid2 as Grid, Link, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../contexts/authContext'
const Signup = () => {
    const { addToken } = useContext(AuthContext)
    console.log(addToken)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const signupUser = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3000/signup',
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
                SIGN UP
            </Typography>
            <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />
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
                type="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <Button variant="contained" onClick={signupUser}>
                Signup
            </Button>
            <Typography variant="body1" textAlign={'center'}>
                Already a user? <Link href="/login">Login</Link>
            </Typography>
            <Typography variant="body1" color={'error'} textAlign={'center'}>
                {error}
            </Typography>
        </Grid>
    )
}

export default Signup
