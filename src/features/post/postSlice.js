import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    posts:[],
    isLoading:false,
    isRejected:false,
    isLike:false,
    isDisLike:false
}

export const getPosts = createAsyncThunk("posts/data", async (_,{rejectWithValue}) => {
   try {
       const { data } = await axios.get("/api/posts")
       return data
   } catch (error) {
       return rejectWithValue([],error)   
   }
})

export const addNewPost = createAsyncThunk("post/addnewPost",async (postObj,{rejectWithValue}) => {
    try{
        const { data } = await axios.post("/api/posts",{postData:postObj},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    }catch(error){
        return rejectWithValue([],error)
    }
})

export const likePost = createAsyncThunk("post/likepost",async (postId,{rejectWithValue}) => {
    try {
        const { data } = await axios.post(`/api/posts/like/${postId}`,{},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue([],error)        
    }
})

export const dislikePost = createAsyncThunk("post/dislike",async(postId,{rejectWithValue}) => {
    try {
        const { data } = await axios.post(`/api/posts/dislike/${postId}`,{},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue([],error)
    }
})

const postSlice =  createSlice({
    name:"posts",
    initialState,
    extraReducers:{
       [getPosts.pending]:(state) => {
           state.isLoading = true
       },
       [getPosts.fulfilled]:(state,{payload}) => {
           state.isLoading = false
           state.posts = payload.posts
       },
       [getPosts.rejected]:(state) => {
           state.isRejected = true
       },
       [addNewPost.pending]:(state) => {
           state.isLoading = true
       },
       [addNewPost.fulfilled]:(state,{payload}) => {
           state.isLoading = false
           state.posts = payload.posts
       },
       [addNewPost.rejected]:(state,{payload}) => {
           state.isRejected = true
           state.posts = payload.posts
       },
       [likePost.pending]:(state) => {
           state.isLike = true
       },
       [likePost.fulfilled]:(state,{payload}) => {
           state.isLike = false
           state.posts = payload.posts
       },
       [likePost.rejected]:(state,{payload}) => {
           state.isRejected = true
           state.posts = payload.posts
       },
       [dislikePost.pending]:(state) => {
           state.isDisLike = true
       },
       [dislikePost.fulfilled]:(state,{payload}) => {
           state.isDisLike = false
           state.posts = payload.posts
       },
       [dislikePost.rejected]:(state,{payload})=>{
           state.isDisLike = true
           state.posts = payload.posts
       }
    }
})

export default postSlice.reducer