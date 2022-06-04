import { useState} from "react"
import { useDispatch , useSelector} from "react-redux"
import { addNewPost} from "../features/post/postSlice"
import { NavBar, SinglePost , Aside} from "../components"
import { StyledTextArea, StyledTextAreaWrapper ,MainContainer,Feed} from "../styled.components"
import { PrimaryStyledButton } from "../styled.components/Button"

export const Home = () => {
    const [postObj, setPostObj] = useState({content:""})
    const {posts}  = useSelector(state => state.post)
    const {loggedUser:{avatarURL}} = useSelector(state => state.auth)
    const reversePosts = [...posts].reverse()
    const dispatch = useDispatch()
   

    const postHandler = () => {
        dispatch(addNewPost(postObj))
        setPostObj({content:""})
    }

    return(
        <MainContainer>
            <NavBar/>
            <Feed>
                <StyledTextAreaWrapper>
                    <div className="avatar avatar-sm ">
                        <img
                        class="img-responsive img-round "
                        src={avatarURL}
                        alt="avatar"
                        />
                    </div>
                    <div className="margin-xs">
                      <StyledTextArea 
                            rows="4" 
                            cols="50"
                            placeholder="Write your thought..."
                            onChange={(e)=>setPostObj(prev => ({...prev,content:e.target.value}))}
                            value={postObj.content}
                            />
                      <PrimaryStyledButton onClick={()=>postHandler()}>Post</PrimaryStyledButton>
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