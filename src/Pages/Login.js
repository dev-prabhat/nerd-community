import { checkLogin } from "../features/auth/authSlice"
import { useState , useEffect} from "react"
import { useDispatch } from "react-redux"
import { loginUser  } from "../features/auth/authSlice"
import { 
    StyledLoginForm,
    StyledH1, 
    StyledSpan, 
    StyledLoginButton, 
    StyledLoginInput,
    StyledLink
} from "../styled.components/LoginPage"
import {  StyledLabel, } from "../styled.components"

export const Login = () => {
    const [user, setUser] = useState({username:"",password:""})
    const dispatch = useDispatch()

    const loginHandler = (e) => {
        e.preventDefault()
        if(user.username.trim() === "" &&
           user.password.trim() === "") return alert("Please Enter Credentials...")
        dispatch(loginUser(user))
    }

    useEffect(()=>{
      dispatch(checkLogin())
    },[])

    return(
        <main>
            <section>
                <StyledLoginForm onSubmit={loginHandler}>
                    <StyledH1>Welcome to 
                        <StyledSpan> Social </StyledSpan> Circle
                    </StyledH1>
                    <StyledLabel>Email Address:</StyledLabel>
                    <StyledLoginInput
                        type="text"
                        placeholder="name@gmail.com"
                        onChange={(e)=>setUser(prev => ({...prev,username:e.target.value}))}
                        value={user.username}
                        required
                    />

                    <StyledLabel>Password: </StyledLabel>
                    <StyledLoginInput
                        type="password"
                        placeholder="password"
                        onChange={(e)=>setUser(prev => ({...prev,password:e.target.value}))}
                        value={user.password}
                        required
                    />
                    <div className="margin-xs text-center">
                        <StyledSpan
                            onClick={()=>setUser({username:"prabhatsingh",password:"prabhatsingh007"})}>
                            Test Credentials
                        </StyledSpan>
                    </div>                   
                    <StyledLoginButton>Login</StyledLoginButton>
                    <p className="margin-xs text-center">Create a New Account 
                        <StyledLink to="/signup">Signup</StyledLink>
                    </p>
                </StyledLoginForm>
            </section>
        </main>
    )
}