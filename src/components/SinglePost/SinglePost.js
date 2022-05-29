import { likePost , dislikePost , addToBookmark , removeFromBookmark } from "../../features/post/postSlice"; 
import { useDispatch , useSelector} from "react-redux";
import { StyledPost } from "../../styled.components";

import { BiComment } from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdBookmarkBorder , MdBookmark } from "react-icons/md";
import "./singlePost.css"


export const SinglePost = ({post , isBookmarkedPage = false}) => {
    const {_id, content,username ,likes :  {likedBy} } = post
    const {bookmarkPosts} = useSelector(state => state.post)
    const {user} = useSelector(state => state.auth)

    const isLiked = likedBy.findIndex(like => like._id === user._id) === -1 ? false : true
    const isBookMarked = bookmarkPosts.findIndex(post => post._id === _id) === -1 ? false : true
    const dispatch = useDispatch()

    return(
        <StyledPost>
            <div className="avatar avatar-text avatar-text-sm margin-xs padding-sm">
                {username.slice(0,2).toUpperCase()}
            </div>
            <div className="content__wrapper">
               <p className="text-sm margin-xs">{content}</p>
               {
                   isBookmarkedPage ? 
                   <MdBookmark className="bookmark__icon" onClick={()=>dispatch(removeFromBookmark(_id))} /> : 
                <div className="btn__wrapper padding-xs">
                   <BiComment className="comment__icon"/>
                    {
                      isLiked ? 
                      <FaHeart className="dislike__icon" onClick={()=>dispatch(dislikePost(_id))}/> :
                      <FaRegHeart className="like__icon"onClick={()=>dispatch(likePost(_id))} /> 
                    }
                    {
                      isBookMarked ? 
                      <MdBookmark className="bookmark__icon" onClick={()=>dispatch(removeFromBookmark(_id))} /> :
                      <MdBookmarkBorder className="bookmark__icon" onClick={()=>dispatch(addToBookmark(_id))}/>
                    }
                 </div>
               } 
            </div>
        </StyledPost>
    )
}