import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom";
import { getUsers } from "./features/auth/authSlice";
import { getPosts } from "./features/post/postSlice"
import { Toaster } from 'react-hot-toast';
import {  AuthRoute, PrivateRoute } from "./components";
import { Login, Home, Profile, Explore, Bookmark, Mock} from "./Pages"

import "./style.css"

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(getPosts())
  },[])

  useEffect(()=>{
    dispatch(getUsers())
  },[])

  return (
   <>
     <Toaster/>
     <Routes>
       <Route path="/mock" element={<Mock/>} />
       <Route element={<PrivateRoute/>}>
         <Route path="/home" element={<Home/>}/>
         <Route path="/explore" element={<Explore/>} />
         <Route path="/bookmark" element={<Bookmark/>}/>
         <Route path="/profile" element={<Profile/>}/>
       </Route>

       <Route element={<AuthRoute/>}>
         <Route path="/" element={<Login/>}/>
       </Route>
     </Routes>
   </>
  );
}

export default App;
