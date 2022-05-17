import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

export const PrivateRoute = () => {
    const {encodedToken} = useSelector(state => state.auth)
    const location = useLocation()
    
    return encodedToken ? (
        <Outlet/>
    ) : (
        <Navigate to="/" state={{from:location}} replace />
    )
}