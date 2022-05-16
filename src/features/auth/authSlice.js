import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    encodedToken : null,
    isError:false,
    isLoading:false,
}


export const loginUser = createAsyncThunk("auth/login",async ()=>{
    try {
        const { data }  = await axios.post("/api/auth/login",{
            username: "adarshbalika",
            password: "adarshBalika123",
        })
        return data
    } catch (error) {
        console.log(error.response)
    }
})

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        checkLogin:(state) => {
            let token = localStorage.getItem("token")
            state.encodedToken = token
        }
    },
    extraReducers:{
        [loginUser.pending]:(state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]:(state,action) => {
            state.isLoading = false
            localStorage.setItem("token",action?.payload?.encodedToken)
            state.encodedToken = action.payload.encodedToken
        },
        [loginUser.rejected]:(state,action) => {
            console.log(action.payload)
            state.isError = true
        }
    }
})

export const {checkLogin} = authSlice.actions

export default authSlice.reducer