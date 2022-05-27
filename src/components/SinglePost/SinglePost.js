import { likePost ,dislikePost} from "../../features/post/postSlice"; 
import { useDispatch } from "react-redux";

import { BiBookmark,BiComment } from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./singlePost.css"

export const SinglePost = ({ _id, content,username ,likes}) => {
    const {likeCount} = likes
    const dispatch = useDispatch()
    return(
        <div className="padding-xs singlepost__wrapper border-radius-xs">
            <div className="avatar avatar-text avatar-text-sm margin-xs padding-sm">
                {username.slice(0,2).toUpperCase()}
            </div>
            <div className="content__wrapper">
               <p className="text-sm margin-xs">{content}</p>
               <div className="btn__wrapper padding-xs">
                 <BiComment className="comment__icon"/>
                 {
                     likeCount === 0 ? 
                     <FaRegHeart className="like__icon"onClick={()=>dispatch(likePost(_id))} /> :
                     <FaHeart className="dislike__icon" onClick={()=>dispatch(dislikePost(_id))}/>
                 }
                 <BiBookmark className="bookmark__icon"/>
               </div>
            </div>
        </div>
    )
}