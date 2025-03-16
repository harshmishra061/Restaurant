import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Grid2 as Grid, Link, Typography } from '@mui/material'
const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const loginUser = () => {
        console.log(data)
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
        </Grid>
    )
}

export default Login
