import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice"
import postReducer from "./features/post/postSlice"
import modalReducer from "./features/modal/modalSlice"
import commentReducer from "./features/comment/commentSlice"
import themeReducer from "./features/theme/themeSlice"

export const store = configureStore({
    reducer:{
      auth:authReducer,
      post:postReducer,
      modal:modalReducer,
      comment:commentReducer,
      theme:themeReducer
    }
})