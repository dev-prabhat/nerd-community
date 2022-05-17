import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    posts:[],
    isLoading:false,
    isRejected:false
}

export const getPosts = createAsyncThunk("user/data", async () => {
   try {
       const { data } = await axios.get("/api/posts")
       return data
   } catch (error) {
      console.log(error.response)       
   }
})


const postSlice =  createSlice({
    name:"posts",
    initialState,
    extraReducers:{
       [getPosts.pending]:(state) => {
           state.isLoading = true
       },
       [getPosts.fulfilled]:(state,action) => {
           state.isLoading = false
           state.posts = action.payload.posts
       },
       [getPosts.rejected]:(state) => {
           state.isRejected = true
       }
    }
})

export default postSlice.reducer