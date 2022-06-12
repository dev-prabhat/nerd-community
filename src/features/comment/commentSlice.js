import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    comments:[],
    isComment:false,
}

export const getComments  = createAsyncThunk("get/comment",async(postId,{rejectWithValue})=>{
    try {
        const { data } = await axios.get(`/api/comments/${postId}`)
        return data
    } catch (error) {
        return  rejectWithValue(error.response.data.message)
    }
})

export const postComment = createAsyncThunk("post/comment",async(commentData,{rejectWithValue})=>{
    const {postId,comment} = commentData
    try {
        const { data } = await axios.post(`/api/comments/add/${postId}`, {content:comment},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) { 
        return rejectWithValue(error.response.data.message)
    }
})

export const deleteComment = createAsyncThunk("delete/comment",async(commentData,{rejectWithValue})=>{
    const {commentId,postId} = commentData
    try {
        const { data } = await axios.delete(`/api/comments/delete/${postId}/${commentId}`,
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)        
    }
})

export const editComment = createAsyncThunk("edit/comment",async(editData,{rejectWithValue})=>{
    const {commentId,postId,content} = editData
    try {
        const { data } = await axios.post(`/api/comments/edit/${postId}/${commentId}`,{content},
        {headers:{"authorization": localStorage.getItem("encodedToken")}})
        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)   
    }
})

const commentSlice = createSlice({
    name:"comment",
    initialState,
    extraReducers:{
        [getComments.pending]:(state)=>{
            state.isComment = true
        },
        [getComments.fulfilled]:(state,{payload})=>{
            state.isComment = false
            state.comments = payload.comments ?? []
        },
        [getComments.rejected]:(state,{payload})=>{
            state.isComment = false
            console.log(payload)
        },
        [postComment.pending]:(state)=>{
            state.isComment = true
        },
        [postComment.fulfilled]:(state,{payload})=>{
            state.isComment = false
            state.comments = payload.comments
        },
        [postComment.rejected]:(state,{payload})=>{
            state.isComment = false
            console.log(payload)
        },
        [deleteComment.pending]:(state)=>{
            state.isComment = true
        },
        [deleteComment.fulfilled]:(state,{payload})=>{
            state.isComment = false
            state.comments = payload.comments
        },
        [deleteComment.rejected]:(state,{payload})=>{
            state.isComment = false
            console.log(payload)
        },
        [editComment.pending]:(state)=>{
            state.isComment = true
        },
        [editComment.fulfilled]:(state,{payload})=>{
            state.isComment = false
            state.comments = payload.comments
        },
        [editComment.rejected]:(state,{payload})=>{
            state.isComment = false
            console.log(payload)
        }
    }
})

export default  commentSlice.reducer