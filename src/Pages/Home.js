import { useEffect , useState} from "react"
import { useDispatch , useSelector} from "react-redux"
import { getPosts , addNewPost} from "../features/post/postSlice"
import { NavBar, SinglePost , Aside} from "../components"
import { StyledTextArea, StyledTextAreaWrapper ,MainContainer,Feed} from "../styled.components"

export const Home = () => {
    const [postObj, setPostObj] = useState({content:""})
    const {posts,isLoading}  = useSelector(state => state.post)
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const avatar = (localStorage.getItem("username") || user.username)
    

    useEffect(()=>{
        dispatch(getPosts())
    },[])

    const postHandler = () => {
        dispatch(addNewPost(postObj))
        setPostObj({content:""})
    }

    return(
        <MainContainer>
            <NavBar/>
            <Feed>
                <StyledTextAreaWrapper className="form__wrapper">
                    <div className="avatar avatar-text avatar-text-sm margin-xs padding-sm">
                       {avatar.slice(0,2).toUpperCase()}
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
                      isLoading ? <h1 className="text-center">loading...</h1> :
                        posts.map(post => (
                            <SinglePost key={post._id} post={post}/>
                        ))
                    }
                </div>
            </Feed>
            <Aside/>
        </MainContainer>
    )
}