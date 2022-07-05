import { ThemeProvider } from "styled-components"
import { useEffect} from "react"
import { useDispatch , useSelector} from "react-redux"
import { Route, Routes } from "react-router-dom";
import { getUsers } from "./features/auth/authSlice";
import { getPosts } from "./features/post/postSlice";
import { ClosePostModal } from "./features/modal/modalSlice";
import { Toaster } from 'react-hot-toast';
import {  AuthRoute, GlobalModal, InputTextBox, PrivateRoute } from "./components";
import { Login, Home, Profile, Explore, Bookmark, Mock, SinglePagePost, LoggedUserProfile} from "./Pages"
import { GlobalStyle , lightTheme , darkTheme } from "./CustomTheme"


function App() {
  const {isPostModal} = useSelector(state => state.modal)
  const { theme } = useSelector(state => state.theme)
  const dispatch = useDispatch()

  const isDarkTheme = theme === "darkTheme"
  useEffect(()=>{
     dispatch(getPosts())
  },[])

  useEffect(()=>{
    dispatch(getUsers())
  },[])

  return (
   <>
   <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme }>
    <GlobalStyle/>
     <GlobalModal isModal={isPostModal} CloseModal={ClosePostModal}>
       <InputTextBox/>
     </GlobalModal>
     <Toaster/>
     <Routes>
       <Route path="/mock" element={<Mock/>} />
       <Route element={<PrivateRoute/>}>
         <Route path="/home" element={<Home/>}/>
         <Route path="/post/:postId" element={<SinglePagePost/>}/>
         <Route path="/explore" element={<Explore/>} />
         <Route path="/bookmark" element={<Bookmark/>}/>
         <Route path="/profile/" element={<LoggedUserProfile/>}/>
         <Route path="/profile/:name" element={<Profile/>} />
       </Route>

       <Route element={<AuthRoute/>}>
         <Route path="/" element={<Login/>}/>
       </Route>
     </Routes>
     </ThemeProvider>
   </>
  );
}

export default App;
