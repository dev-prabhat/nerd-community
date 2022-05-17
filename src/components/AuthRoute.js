import {Navigate,useLocation,Outlet} from "react-router-dom"
import { useSelector } from "react-redux"

export const AuthRoute = () => {
    const {encodedToken} = useSelector(state => state.auth)
    const location = useLocation()

    const from = location?.state?.from?.pathname || "/home"
    
    return encodedToken ? (
        <Navigate to={from} state={{from:location}} replace/>
    ) : (
        <Outlet/>
    ) 
}