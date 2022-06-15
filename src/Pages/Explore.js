import { Aside, Header, NavBar , SinglePost } from "../components"
import { MainContainer  , Feed} from "../styled.components"
import { useSelector } from "react-redux"

export const Explore = () => {
    const {posts} = useSelector(state => state.post)
   
    return(
        <MainContainer >
            <Header/>
            <NavBar/>
                <Feed >
                   {
                       posts.map(post => (
                           <SinglePost key={post._id} post={post}/>
                       ))
                   }
                </Feed>
            <Aside/>
        </MainContainer>
    )
}