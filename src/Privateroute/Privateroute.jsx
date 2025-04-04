import React from 'react'
import { token } from '../Utlis/Index'
import { Navigate, Outlet } from 'react-router'


const Privateroute = () => {
    return token ? <Outlet /> : <Navigate to="/login" />

} 


export default Privateroute