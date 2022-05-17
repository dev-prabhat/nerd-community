import {useEffect} from "react"
import { useDispatch} from "react-redux"
import { loginUser , checkLogin } from "../../features/auth/authSlice"
import "./login.css"

export const Login = () => {
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(checkLogin())
    },[])
    
    return(
        <main>
            <section>
                <div className="login-form border-radius-xs padding-sm" >
                    <h1 className="head-lg text-center text-gray">Welcome to <span className="highlight">Nerdify</span> Social</h1>
                    <label className="form-label">Email Address:</label>
                    <input
                    type="text"
                    className="form-field border-radius-xs padding-xs"
                    placeholder="name@gmail.com"
                    required
                    />

                    <label className="form-label">Password: </label>
                    <input
                    type="password"
                    className="form-field border-radius-xs padding-xs"
                    placeholder="password"
                    required
                    />
                    <div className="remember-me__wrapper margin-xs">
                        <input type="checkbox" id="remember-md"/>
                        <label className="padding-xs" htmlFor="remember-md">Remember me</label>
                    </div>
                    <button className="btn btn-primary d-100 text-sm border-radius-xs" onClick={()=>dispatch(loginUser())}>Login</button>
                </div>
            </section>
        </main>
    )
}