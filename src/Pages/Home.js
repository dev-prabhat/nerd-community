import { useState} from "react"
import { useDispatch , useSelector} from "react-redux"
import {  addNewPost} from "../features/post/postSlice"
import { NavBar, SinglePost , Aside} from "../components"
import { StyledTextArea, StyledTextAreaWrapper ,MainContainer,Feed} from "../styled.components"

export const Home = () => {
    const [postObj, setPostObj] = useState({content:""})
    const {posts}  = useSelector(state => state.post)
    const reversePosts = [...posts].reverse()
    const dispatch = useDispatch()

    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    const avatar = loggedUser.firstName.slice(0,1) + loggedUser.lastName.slice(0,1)

    const postHandler = () => {
        dispatch(addNewPost(postObj))
        setPostObj({content:""})
    }

    return(
        <MainContainer>
            <NavBar/>
            <Feed>
                <StyledTextAreaWrapper>
                    <div className="avatar avatar-text avatar-text-sm margin-xs padding-sm">
                       {avatar.toUpperCase()}
                    </div> 
                    <div className="margin-xs">
                      <StyledTextArea 
                            rows="4" 
                            cols="50"
                            placeholder="Write your thought..."
                            onChange={(e)=>setPostObj(prev => ({...prev,content:e.target.value}))}
                            value={postObj.content}
                            />
                      <button className="btn btn-primary" onClick={()=>postHandler()}>Post</button>
                    </div>  
                </StyledTextAreaWrapper>
                
                <div>
                    {
                      reversePosts.map(post => (
                            <SinglePost key={post._id} post={post}/>
                        ))
                    }
                </div>
            </Feed>
            <Aside/>
        </MainContainer>
    )
}