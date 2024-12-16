import { Container } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <h2>User Login</h2>
            <button onClick={() => {
                localStorage.setItem('token','WTSA$%123D'), navigate('/')
            }}></button>
        </Container>
    )
}

export default Login