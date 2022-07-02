import { useState} from "react"
import { useDispatch , useSelector} from "react-redux"
import { addNewPost} from "../features/post/postSlice"
import { NavBar, SinglePost , Aside, Header} from "../components"
import { 
    StyledTextArea, 
    StyledTextAreaWrapper, 
    MainContainer, 
    Feed, 
    PrimaryStyledButton,
    StyledForm} from "../styled.components"   

export const Home = () => {
    const [postObj, setPostObj] = useState({content:""})
    const {posts}  = useSelector(state => state.post)
    const {loggedUser:{avatarURL}} = useSelector(state => state.auth)
    const reversePosts = [...posts].reverse()
    const dispatch = useDispatch()
   

    const postHandler = (e) => {
        e.preventDefault()
        if(postObj.content.trim() === "") return alert("Add some content...")
        dispatch(addNewPost(postObj))
        setPostObj({content:""})
    }

    return(
        <MainContainer>
            <Header/>
            <NavBar/>
            <Feed>
                <StyledTextAreaWrapper>
                    <div className="avatar avatar-sm ">
                        <img
                            className="img-responsive img-round "
                            src={avatarURL}
                            alt="avatar"
                        />
                    </div>
                    <StyledForm onSubmit={postHandler}>
                      <StyledTextArea 
                            rows="4" 
                            cols="50"
                            placeholder="Write your thought..."
                            onChange={(e)=>setPostObj(prev => ({...prev,content:e.target.value}))}
                            value={postObj.content}
                            />
                      <PrimaryStyledButton > Post </PrimaryStyledButton>
                    </StyledForm>  
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