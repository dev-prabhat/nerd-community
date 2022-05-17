import { BiBookmark,BiComment,BiUpvote,BiDownvote } from "react-icons/bi";
import "./singlePost.css"

export const SinglePost = ({ content,username }) => {
    return(
        <div className="padding-xs singlepost__wrapper border-radius-xs">
            <div className="avatar avatar-text avatar-text-sm margin-xs padding-sm">
                {username.slice(0,2).toUpperCase()}
            </div>
            <div className="content__wrapper">
               <p className="text-sm margin-xs">{content}</p>
               <div className="btn__wrapper padding-xs">
                 <BiComment className="comment__icon"/>
                 <BiUpvote className="like__icon"/>
                 <BiDownvote className="dislike__icon"/>
                 <BiBookmark className="bookmark__icon"/>
               </div>
            </div>
        </div>
    )
}