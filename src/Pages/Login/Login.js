import {useState,useEffect} from "react"
import { useDispatch } from "react-redux"
import { loginUser , checkLogin} from "../../features/auth/authSlice"
import "./login.css"

export const Login = () => {
    const [userCredentials, setUserCredentials] = useState({username:"",password:""})
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
                    onChange={(e)=>setUserCredentials(prev => ({...prev,username:e.target.value}))}
                    value={userCredentials.username}
                    required
                    />

                    <label className="form-label">Password: </label>
                    <input
                    type="password"
                    className="form-field border-radius-xs padding-xs"
                    placeholder="password"
                    onChange={(e)=>setUserCredentials(prev => ({...prev,password:e.target.value}))}
                    value={userCredentials.password}
                    required
                    />
                    <div className="option-container padding-xs">
                        <div className="remember-me__wrapper">
                            <input type="checkbox" id="remember-md"/>
                            <label className="padding-xs" htmlFor="remember-md">Remember me</label>
                        </div>
                        <p 
                          className="test-credentials highlight font-weight-semibold" 
                          onClick={()=>setUserCredentials({username:"adarshbalika",password:"adarshBalika123"})}
                        >
                        Test User Credentials</p>
                    </div>
                    <button className="btn btn-primary d-100 text-sm border-radius-xs" onClick={()=>dispatch(loginUser())}>Login</button>
                </div>
            </section>
        </main>
    )
}