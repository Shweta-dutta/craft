import React, { useEffect } from 'react'
import { Outlet, replace, useNavigate } from 'react-router-dom'

const PrivateRouter = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/login', {replace:true})
        }
    }, [navigate])

    return (
        <Outlet />
    )
}

export default PrivateRouter