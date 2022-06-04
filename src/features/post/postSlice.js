import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axios from "axios"

const initialState = {
    posts:[],
    bookmarkPosts:[],
    isLoading:false,
    isNewPostAdded:false,
    isLike:false,
    isDisLike:false,
    isBookMark:false,
    isDelete:false
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
        return rejectWithValue(error.response.data.message)
    }
})

export const deletePost = createAsyncThunk("post/deletePost", async(postId,{rejectWithValue})=>{
    try {
        const { data } = await axios.delete(`/api/posts/${postId}`,
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export const likePost = createAsyncThunk("post/likepost",async (postId,{rejectWithValue}) => {
    try {
        const { data } = await axios.post(`/api/posts/like/${postId}`,{},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)        
    }
})

export const dislikePost = createAsyncThunk("post/dislike",async(postId,{rejectWithValue}) => {
    try {
        const { data } = await axios.post(`/api/posts/dislike/${postId}`,{},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
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
           state.isLoading = true
       },
       [addNewPost.pending]:(state) => {
           state.isNewPostAdded = true
       },
       [addNewPost.fulfilled]:(state,{payload}) => {
           state.isNewPostAdded = false
           state.posts = payload.posts
           toast.success("Added new Post",{duration:1000})
       },
       [addNewPost.rejected]:(state,{payload}) => {
           state.isNewPostAdded = false
           toast.error(payload,{duration:1000})
       },
       [deletePost.pending]:(state)=>{
           state.isDelete = true
       },
       [deletePost.fulfilled]:(state,{payload})=>{
           state.isDelete = false
           state.posts = payload.posts
           toast.success("Post Deleted",{duration:1000})
       },
       [deletePost.rejected]:(state,{payload})=>{
          state.isDelete = false
          toast.error(payload,{duration:1000})
       },
       [likePost.pending]:(state) => {
           state.isLike = true
       },
       [likePost.fulfilled]:(state,{payload}) => {
           state.isLike = false
           state.posts = payload.posts
           toast.success("Like post",{duration:1000})
       },
       [likePost.rejected]:(_,{payload}) => {
           toast.error(payload,{duration:1000})
       },
       [dislikePost.pending]:(state) => {
           state.isDisLike = true
       },
       [dislikePost.fulfilled]:(state,{payload}) => {
           state.isDisLike = false
           state.posts = payload.posts
           toast.success("Unlike post",{duration:1000})
       },
       [dislikePost.rejected]:(state,{payload})=>{
           state.isDisLike = false
           toast.error(payload,{duration:1000})
       },
       [addToBookmark.pending]:(state) => {
           state.isBookMark = true
       },
       [addToBookmark.fulfilled]:(state,{payload})=>{
           state.isBookMark = false
           state.bookmarkPosts = payload.bookmarks
           toast.success("Added to bookmark",{duration:1000})
       },
       [addToBookmark.rejected]:(state,{payload})=>{
           state.isBookMark = false
           toast.error(payload,{duration:1000})
       },
       [removeFromBookmark.pending]:(state) => {
           state.isBookMark = true
       },
       [removeFromBookmark.fulfilled]:(state,{payload}) => {
           state.isBookMark = false
           state.bookmarkPosts = payload.bookmarks
           toast.success("Remove from bookmark",{duration:1000})
       },
       [removeFromBookmark.rejected]:(state,{payload})=>{
           state.isBookMark = false
           toast.error(payload,{duration:1000})
       }
       
    }
})

export default postSlice.reducer