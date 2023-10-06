import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <h1>loadinng ...</h1>
    }
    else if (!user) {
        return <Navigate state={location.pathname} to="/login" />
    }
    return children
}

export default PrivetRoutes