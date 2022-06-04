import { useState } from "react";
import { likePost , dislikePost , addToBookmark , removeFromBookmark , deletePost} from "../../features/post/postSlice"; 
import { useDispatch , useSelector} from "react-redux";
import { StyledPost } from "../../styled.components";
import { FlexContainer, RowFlexContainer } from "../../styled.components/Post";

import { GoKebabVertical } from "react-icons/go";
import { BiComment , BiEdit, BiTrash} from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdBookmarkBorder , MdBookmark } from "react-icons/md";
import "./singlePost.css"


export const SinglePost = ({post , isBookmarkedPage = false , isProfilePage = false}) => {
    const [showOptionContainer, setShowOptionContainer] = useState(false)
    const {_id, content,username,avatarURL,likes :  {likedBy} } = post
    const {bookmarkPosts} = useSelector(state => state.post)
    const {loggedUser} = useSelector(state => state.auth)

    const isLiked = likedBy.findIndex(like => like._id === loggedUser._id) === -1 ? false : true
    const isBookMarked = bookmarkPosts.findIndex(post => post._id === _id) === -1 ? false : true
    const dispatch = useDispatch()

    return(
        <StyledPost>
          <FlexContainer className="position-rel">
           <RowFlexContainer>
            <div className="avatar avatar-sm margin-xs">
                <img
                class="img-responsive img-round "
                src={avatarURL}
                alt="avatar"
                />
            </div>
            <h5 className="text-gray margin-xs">@{username}</h5>
          </RowFlexContainer>
              {isProfilePage && <div className="options__wrapper border-radius-xs">
                  {showOptionContainer &&<>
                      <div className="margin-xs d-flex icon__wrapper"> 
                         <BiEdit className="edit__icon"/> Edit 
                      </div>
                      <div className="margin-xs d-flex icon__wrapper" onClick={()=>dispatch(deletePost(_id))}> 
                        <BiTrash className="delete__icon"/> 
                          Delete
                      </div>
                    </>}
                </div>}
                {
                  isProfilePage &&
                  <GoKebabVertical className="menu__icon" 
                  onClick={()=>setShowOptionContainer(prev => !prev)} />
                }        
          </FlexContainer>
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