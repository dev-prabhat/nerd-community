import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { signupUser  } from "../features/auth/authSlice"
import { 
    StyledLoginForm,
    StyledH1, 
    StyledSpan, 
    StyledLoginButton, 
    StyledLoginInput,
    StyledLink
} from "../styled.components/LoginPage"
import {  StyledLabel } from "../styled.components"

export const Signup = () => {
    const [user, setUser] = useState({firstName:"",lastName:"",username:"",password:""})
    const dispatch = useDispatch()

    const loginHandler = (e) => {
        e.preventDefault()
        if(user.firstName.trim() === "" || user.lastName.trim() === "" ||user.username.trim() === "" ||
           user.password.trim() === "") return toast.error("Please enter in all fields..",{duration:2000})
        dispatch(signupUser(user))
    }


    return(
        <main>
            <section>
                <StyledLoginForm onSubmit={loginHandler}>
                    <StyledH1>Welcome to 
                        <StyledSpan> Social </StyledSpan> Circle
                    </StyledH1>
                    <StyledLabel>FirstName:</StyledLabel>
                    <StyledLoginInput
                        type="text"
                        placeholder="jon"
                        onChange={(e)=>setUser(prev => ({...prev,firstName:e.target.value}))}
                        value={user.firstName}
                        required
                    />
                    <StyledLabel>LastName:</StyledLabel>
                    <StyledLoginInput
                        type="text"
                        placeholder="doe"
                        onChange={(e)=>setUser(prev => ({...prev,lastName:e.target.value}))}
                        value={user.lastName}
                        required
                    />

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
                    <StyledLoginButton>Signup</StyledLoginButton>
                    <p className="margin-xs text-center">Already have an account 
                        <StyledLink to="/">Login</StyledLink>
                    </p>
                </StyledLoginForm>
            </section>
        </main>
    )
}