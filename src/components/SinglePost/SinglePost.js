import { Link , useParams} from "react-router-dom"
import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { 
  likePost , 
  dislikePost , 
  addToBookmark , 
  removeFromBookmark , 
  deletePost,  
  editPost } from "../../features/post/postSlice"; 
import { LocalModal } from "../LocalModal"
import { 
  StyledPost , 
  StyledTextAreaWithBorder, 
  PrimaryStyledButton , 
  StyledIconButton,
  StyledForm} from "../../styled.components";
import { FlexContainer, RowFlexContainer } from "../../styled.components/Post";

import { BiComment , BiEdit, BiTrash} from "react-icons/bi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdBookmarkBorder , MdBookmark } from "react-icons/md";
import "./singlePost.css"



export const SinglePost = ({post , isBookmarkedPage = false , isProfilePage = false}) => {
    const {name} = useParams()
    const {_id, content,username,avatarURL,likes :  {likedBy} } = post
    const [showEditPostModal, setShowEditPostModal] = useState(false)
   
    const [editSinglePost, setEditSinglePost] = useState({...post})
    const {bookmarkPosts} = useSelector(state => state.post)
    const {loggedUser} = useSelector(state => state.auth)

    const isLiked = likedBy.findIndex(like => like.username === loggedUser.username) === -1 ? false : true
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
                {
                  isProfilePage && loggedUser.username === name &&
                  <RowFlexContainer>
                     <StyledIconButton onClick={()=>OpenEditModal()}>
                        <BiEdit />
                     </StyledIconButton>
                     <StyledIconButton onClick={()=>dispatch(deletePost(_id))}>
                        <BiTrash />
                     </StyledIconButton>
                  </RowFlexContainer>
                }
          </FlexContainer>
            <div className="content__wrapper">
               <p className="text-sm margin-xs">{content}</p>
            </div>
               {
                   isBookmarkedPage ? 
                   <StyledIconButton onClick={()=>dispatch(removeFromBookmark(_id))}>
                      <MdBookmark/>
                   </StyledIconButton>
                    : 
                <div className="btn__wrapper padding-xs">
                    <Link to={`/post/${_id}`}>
                      <StyledIconButton>
                        <BiComment/>
                      </StyledIconButton>
                    </Link>
                    {
                      isLiked ? 
                      <StyledIconButton onClick={()=>dispatch(dislikePost(_id))}>
                        <FaHeart/>
                      </StyledIconButton>
                       :
                      <StyledIconButton  onClick={()=>dispatch(likePost(_id))} >
                        <FaRegHeart/>
                      </StyledIconButton>  
                    }
                    {
                      isBookMarked ? 
                      <StyledIconButton onClick={()=>dispatch(removeFromBookmark(_id))}>
                        <MdBookmark/>
                      </StyledIconButton>
                       :
                      <StyledIconButton onClick={()=>dispatch(addToBookmark(_id))}>
                        <MdBookmarkBorder/>
                      </StyledIconButton>
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