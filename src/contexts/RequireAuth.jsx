import React from 'react';
import useAuth from '@hooks/useAuth';
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth()
    const location = useLocation()

    return (
        auth?.user?.role && allowedRoles?.includes(auth?.user?.role)
            ? <Outlet />
            : auth?.user 
                ? <Navigate to="/notfound" replace state={{ from: location }} />
                : <Navigate to="/signin" replace state={{ from: location }} />
    )
}

export default RequireAuth