import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
import axios from "axios";

const initialState = {
    encodedToken : undefined,
    isLoading:false,
    LoadingUsers:false,
    isUserEdited:false,
    users:[],
    loggedUser:{}
}


export const loginUser = createAsyncThunk("auth/login",async (user,{rejectWithValue})=>{
    try {
        const { data }  = await axios.post("/api/auth/login",{
            username: user.username,
            password: user.password,
        })
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const signupUser = createAsyncThunk("auth/signup",async(user,{rejectWithValue})=>{
    try {
        const { data } = await axios.post("/api/auth/signup",{
            firstName:user.firstName,
            lastName:user.lastName,
            username: user.username,
            password: user.password,
        })
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const editUserProfile = createAsyncThunk("editUser/profile",async(editProfileData,{rejectWithValue})=>{
    try {
        const { data } = await axios.post("/api/users/edit",{userData:editProfileData},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const getUsers = createAsyncThunk("user/data",async(_,{rejectWithValue})=>{
   try {
       const { data } = await axios.get("/api/users")
       return data
   } catch (error) {
      return rejectWithValue(error.response.data.message)     
   }
})

export const followUserFromDB = createAsyncThunk("follow/user",async(followUserId,{rejectWithValue})=>{
    try {
        const { data } = await axios.post(`/api/users/follow/${followUserId}`,{},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)        
    }
})

export const unfollowUserFromDB = createAsyncThunk("unfollow/user",async(followUserId,{rejectWithValue})=>{
    try {
        const { data } = await axios.post(`/api/users/unfollow/${followUserId}`,{},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)        
    }
})

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logoutUser:(state)=>{
            localStorage.clear()
            state.encodedToken = undefined
            state.loggedUser = {}
        },
        checkLogin:(state)=>{
            state.encodedToken = localStorage.getItem("encodedToken")
            state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
        }
    },
    extraReducers:{
        [loginUser.pending]:(state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]:(state,{payload}) => {
            state.isLoading = false
            let user = payload?.foundUser
            user.password = undefined
            localStorage.setItem("loggedUser",JSON.stringify(user))
            localStorage.setItem("encodedToken",payload?.encodedToken)
            state.loggedUser = payload?.foundUser
            state.encodedToken = payload?.encodedToken
            toast.success("Login Successfully",{duration:1000})
        }, 
        [loginUser.rejected]:(state,{payload}) => {
            state.isLoading = false
            toast.error(payload,{duration:1000})
        },
        [signupUser.pending]:(state) => {
            state.isLoading = true
        },
        [signupUser.fulfilled]:(state,{payload}) => {
            state.isLoading = false
            let user = payload?.createdUser
            user.password = undefined
            localStorage.setItem("loggedUser",JSON.stringify(user))
            localStorage.setItem("encodedToken",payload?.encodedToken)
            state.loggedUser = payload.createdUser
            state.encodedToken = payload.encodedToken
            toast.success("Signup Successfully",{duration:1000})
        }, 
        [signupUser.rejected]:(state,{payload}) => {
            state.isLoading = false
            toast.error(payload,{duration:1000})
        },
        [getUsers.pending]:(state) => {
            state.LoadingUsers = true
        },
        [getUsers.fulfilled]:(state,{payload})=>{
            state.LoadingUsers = false
            state.users = payload.users
        },
        [getUsers.rejected]:(state,{payload})=>{
            state.LoadingUsers = false
            toast.error(payload,{duration:1000})
        },
        [editUserProfile.pending]:(state)=>{
            state.isUserEdited = true
        },
        [editUserProfile.fulfilled]:(state,{payload})=>{
            state.isUserEdited = false
            state.loggedUser = payload.user
            localStorage.removeItem("loggedUser")
            localStorage.setItem("loggedUser",JSON.stringify(payload?.user))
        },
        [editUserProfile.rejected]:(state,{payload})=>{
            state.isUserEdited = false
            toast.error(payload,{duration:1000})
        },
        [followUserFromDB.pending]:(state)=>{
            state.isLoading = true
        },
        [followUserFromDB.fulfilled]:(state,{payload})=>{
            let followUser = payload?.followUser
            state.users = state.users.filter(user => user.username !== followUser.username)
            state.users = [followUser,...state.users]
            state.isLoading = false
            state.loggedUser = payload?.user
            localStorage.removeItem("loggedUser")
            localStorage.setItem("loggedUser",JSON.stringify(payload?.user))
            toast.success("Successfully followed",{duration:1000})
        },
        [followUserFromDB.rejected]:(state,{payload})=>{
            state.isLoading = false
            toast.error(payload,{duration:1000})
        },
        [unfollowUserFromDB.pending]:(state)=>{
            state.isLoading = true
        },
        [unfollowUserFromDB.fulfilled]:(state,{payload})=>{
            let followUser = payload?.followUser
            state.users = state.users.filter(user => user.username !== followUser.username)
            state.users = [followUser,...state.users]
            state.isLoading = false
            state.loggedUser = payload?.user
            localStorage.removeItem("loggedUser")
            localStorage.setItem("loggedUser",JSON.stringify(payload?.user))
            toast.success("Successfully unfollowed",{duration:1000})
        },
        [unfollowUserFromDB.rejected]:(state,{payload})=>{
            state.isLoading = false
            toast.error(payload,{duration:1000})
        }
    }
})


export const {logoutUser,checkLogin} = authSlice.actions

export default authSlice.reducer