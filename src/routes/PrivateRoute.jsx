/* eslint-disable react/prop-types */

import { PuffLoader } from 'react-spinners'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) return (
        <div className='flex justify-center items-center h-screen'>
            <PuffLoader />
        </div>
    )
    if (user) return children
    return <Navigate to='/login' state={location.pathname} replace='true' />
}


export default PrivateRoute
