import { useSelector} from "react-redux"
import { Aside, Header, NavBar, SinglePost } from "../components"
import { MainContainer , Feed} from "../styled.components"
import { useDocument, useWindowScroll } from "../customHooks"


export const Bookmark = () => {
    useWindowScroll()
    useDocument("Bookmark")
    const {bookmarkPosts} = useSelector(state => state.post)

    return(
        <MainContainer>
           <Header/>
            <NavBar/>
                <Feed >
                   {
                       bookmarkPosts.length === 0 ? <h1 className="text-center head-sm">Page is Empty</h1> : 
                       bookmarkPosts.map((post) => (
                         <SinglePost key={post._id} post={post} isBookmarkedPage={true}/>
                       ))
                   }
                </Feed>
            <Aside/>
        </MainContainer>
    )
}