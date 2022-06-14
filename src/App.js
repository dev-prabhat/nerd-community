import { ThemeProvider } from "styled-components"
import { useEffect , useState} from "react"
import { useDispatch , useSelector} from "react-redux"
import { Route, Routes } from "react-router-dom";
import { getUsers } from "./features/auth/authSlice";
import { getPosts , addNewPost } from "./features/post/postSlice";
import { ClosePostModal } from "./features/modal/modalSlice";
import { Toaster } from 'react-hot-toast';
import {  AuthRoute, GlobalModal, PrivateRoute } from "./components";
import { PrimaryStyledButton } from "./styled.components/Button";
import { StyledTextAreaWithBorder } from "./styled.components/TextArea";
import { StyledForm , StyledLabel} from "./styled.components/Form";
import { Login, Home, Profile, Explore, Bookmark, Mock, SinglePagePost} from "./Pages"
import { GlobalStyle , lightTheme , darkTheme } from "./CustomTheme"




function App() {
  const [postObj, setPostObj] = useState({content:""})
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

  const postHandler = (e) => {
    e.preventDefault()
    if(postObj.content.trim() === "") return alert("Invalid Input...")
    dispatch(addNewPost(postObj))
    setPostObj({content:""})
    dispatch(ClosePostModal())
}

  return (
   <>
   <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme }>
    <GlobalStyle/>
     <GlobalModal isModal={isPostModal} CloseModal={ClosePostModal}>
       <StyledForm onSubmit={postHandler}>
          <StyledLabel>Create New Post</StyledLabel>
          <StyledTextAreaWithBorder 
                rows="4" 
                cols="50"
                placeholder="Write your thought..."
                onChange={(e)=>setPostObj(prev => ({...prev,content:e.target.value}))}
                value={postObj.content}
                />
          <PrimaryStyledButton onClick={()=>postHandler()}>New Post</PrimaryStyledButton>
          </StyledForm>
     </GlobalModal>
     <Toaster/>
     <Routes>
       <Route path="/mock" element={<Mock/>} />
       <Route element={<PrivateRoute/>}>
         <Route path="/home" element={<Home/>}/>
         <Route path={`/post/:postId`} element={<SinglePagePost/>}/>
         <Route path="/explore" element={<Explore/>} />
         <Route path="/bookmark" element={<Bookmark/>}/>
         <Route path="/profile" element={<Profile/>}/>
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
