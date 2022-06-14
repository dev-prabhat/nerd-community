import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme : "lightTheme"
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setDarkTheme:(state)=>{
           state.theme = "darkTheme"
        },
        setLightTheme:(state)=>{
            state.theme="lightTheme"
        }
    }
}) 

export const { setDarkTheme ,setLightTheme } = themeSlice.actions

export default themeSlice.reducer
