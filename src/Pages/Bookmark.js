import { useSelector} from "react-redux"
import { Aside, NavBar, SinglePost } from "../components"
import { MainContainer , Feed} from "../styled.components"


export const Bookmark = () => {
    const {bookmarkPosts} = useSelector(state => state.post)

    
    return(
        <MainContainer>
            <NavBar/>
                <Feed >
                   {
                       bookmarkPosts && bookmarkPosts.map((post) => (
                         <SinglePost key={post._id} post={post} isBookmarkedPage={true}/>
                       ))
                   }
                </Feed>
            <Aside/>
        </MainContainer>
    )
}