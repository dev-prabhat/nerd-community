import { Link } from "react-router-dom"
import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
// import { getComments , postComment} from "../../features/comment/commentSlice"
import { likePost , dislikePost , addToBookmark , removeFromBookmark , deletePost,  editPost } from "../../features/post/postSlice"; 
import { LocalModal } from "../LocalModal"
import { StyledPost , StyledTextAreaWithBorder, PrimaryStyledButton} from "../../styled.components";
import { FlexContainer, RowFlexContainer } from "../../styled.components/Post";

import { GoKebabVertical } from "react-icons/go";
import { BiComment , BiEdit, BiTrash} from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdBookmarkBorder , MdBookmark } from "react-icons/md";
import "./singlePost.css"
import { StyledForm } from "../../styled.components/Form";


console.log()
export const SinglePost = ({post , isBookmarkedPage = false , isProfilePage = false}) => {
    const {_id, content,username,avatarURL,likes :  {likedBy} } = post
    const [showEditPostModal, setShowEditPostModal] = useState(false)
   
    const [showOptionContainer, setShowOptionContainer] = useState(false)
    const [editSinglePost, setEditSinglePost] = useState({...post})
    const {bookmarkPosts} = useSelector(state => state.post)
    const {loggedUser} = useSelector(state => state.auth)

    const isLiked = likedBy.findIndex(like => like._id === loggedUser._id) === -1 ? false : true
    const isBookMarked = bookmarkPosts.findIndex(post => post._id === _id) === -1 ? false : true
    const dispatch = useDispatch()

    const OpenEditModal = () => {
      setShowEditPostModal(prev => !prev)
      setShowOptionContainer(prev => !prev)
    }

    const handleEdit = (e) => {
      e.preventDefault()
      if(editSinglePost.content.trim() === "") return alert("Invalid Input..")
      dispatch(editPost(editSinglePost))
      setShowEditPostModal(prev => !prev)
    }

    return(
        <StyledPost>
          <FlexContainer className="position-rel">
           <RowFlexContainer>
            <div className="avatar avatar-sm margin-xs">
                <img
                className="img-responsive img-round "
                src={avatarURL}
                alt="avatar"
                />
            </div>
            <h5 className="text-gray margin-xs">@{username}</h5>
          </RowFlexContainer>
              {isProfilePage && <div className="options__wrapper border-radius-xs">
                  {showOptionContainer &&<>
                      <div className="margin-xs d-flex icon__wrapper" onClick={()=>OpenEditModal()}> 
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
            </div>
               {
                   isBookmarkedPage ? 
                   <MdBookmark className="bookmark__icon" onClick={()=>dispatch(removeFromBookmark(_id))} /> : 
                <div className="btn__wrapper padding-xs">
                    <Link to={`/post/${_id}`} state={post}>
                      <BiComment className="comment__icon"/>
                    </Link>
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
            <LocalModal isModal={showEditPostModal} CloseModal={setShowEditPostModal} >
              <StyledForm onSubmit={handleEdit}>
                  <label>Edit Post:</label>
                  <StyledTextAreaWithBorder
                  rows="4" 
                  cols="50"
                  placeholder="Write your thought..."
                  onChange={(e)=>setEditSinglePost(prev => ({...prev,content:e.target.value}))}
                  value={editSinglePost.content}
                  />
                <PrimaryStyledButton>Save</PrimaryStyledButton>
              </StyledForm>
            </LocalModal>
        </StyledPost>
    )
}