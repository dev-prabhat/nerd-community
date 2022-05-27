import { Route, Routes } from "react-router-dom";
import {  AuthRoute, PrivateRoute } from "./components";
import { Login, Home, Profile, Explore, Bookmark, Mock} from "./Pages"

import "./style.css"

function App() {
  return (
   <>
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
