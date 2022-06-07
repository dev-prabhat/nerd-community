import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPostModal:false
}


const modalSlice = createSlice({ 
    name:"modal",
    initialState,
    reducers:{
        OpenPostModal:(state)=>{
            state.isPostModal=true
        },
        ClosePostModal:(state)=>{
            state.isPostModal=false
        }
    }
})


export const { OpenPostModal, ClosePostModal} = modalSlice.actions

export default modalSlice.reducer
