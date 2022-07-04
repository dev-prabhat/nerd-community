import { Aside, Header, NavBar , SinglePost } from "../components"
import { MainContainer  , Feed} from "../styled.components"
import { useSelector } from "react-redux"
import { useDocument, useWindowScroll } from "../customHooks"

export const Explore = () => {
    useWindowScroll()
    useDocument("Explore")
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