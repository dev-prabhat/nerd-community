import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditProfileModal:false,
    isPostModal:false
}


const modalSlice = createSlice({ 
    name:"modal",
    initialState,
    reducers:{
        OpenEditProfileModal:(state) => {
            state.isEditProfileModal = true
        },
        CloseEditProfileModal:(state) => {
            state.isEditProfileModal = false
        },
        OpenPostModal:(state)=>{
            state.isPostModal=true
        },
        ClosePostModal:(state)=>{
            state.isPostModal=false
        }
    }
})


export const { OpenEditProfileModal , CloseEditProfileModal , OpenPostModal, ClosePostModal} = modalSlice.actions

export default modalSlice.reducer
