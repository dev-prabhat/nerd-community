import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    posts:[],
    bookmarkPosts:[],
    isLoading:false,
    isRejected:false,
    isLike:false,
    isDisLike:false,
    isBookMark:false
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

export const addToBookmark = createAsyncThunk("addtobookmark/post",async(postId,{rejectWithValue})=>{
    try {
        const { data } = await axios.post(`/api/users/bookmark/${postId}`,{},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const removeFromBookmark = createAsyncThunk("removefrombookmark/post",async(postId,{rejectWithValue})=>{
    try {
        const { data } = await axios.post(`/api/users/remove-bookmark/${postId}`,{},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)        
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
       },
       [addToBookmark.pending]:(state) => {
           state.isBookMark = true
       },
       [addToBookmark.fulfilled]:(state,{payload})=>{
           state.isBookMark = false
           state.bookmarkPosts = payload.bookmarks
       },
       [addToBookmark.rejected]:(_,{payload})=>{
           console.log(payload)
       },
       [removeFromBookmark.pending]:(state) => {
           state.isBookMark = true
       },
       [removeFromBookmark.fulfilled]:(state,{payload}) => {
           state.isBookMark = false
           state.bookmarkPosts = payload.bookmarks
       },
       [removeFromBookmark.rejected]:(_,{payload})=>{
           console.log(payload)
       }
       
    }
})

export default postSlice.reducer