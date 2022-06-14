import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteComment , editComment} from "../features/comment/commentSlice";
import { 
    PrimaryStyledButton , 
    StyledIconButton , 
    StyledForm, 
    StyledModalInput} from "../styled.components";
import { RowFlexContainer, StyledComment, StyledCommentWrapper } from "../styled.components/Post"
import { FaTrashAlt,FaRegEdit } from "react-icons/fa"; 
import { LocalModal } from "./LocalModal";


export const Comment = ({comment,postId}) => {
    const {username,content,_id:commentId,avatarURL} = comment
    const [isModal , setIsModal] = useState(false)
    const [resetComment, setResetComment] = useState({...comment})
    
    const dispatch = useDispatch()
    const commentData = {commentId,postId,content}

    const submitComment = (e) => {
        e.preventDefault()
        const {content} = resetComment
        if(content.trim() === "") return alert("Add some comment..")
        const editData = {commentId,postId,content}
        dispatch(editComment(editData))
        setIsModal(prev => !prev)
    }

    return(
        <StyledCommentWrapper>
            <RowFlexContainer >
                <div class="avatar avatar-sm">
                    <img
                        class="img-responsive img-round"
                        src={avatarURL}
                        alt="avatar"
                    />
                </div>
                <div>
                    <h5 className="text-gray margin-xs">@{username}</h5>
                    <StyledComment>{content}</StyledComment>
                </div>
            </RowFlexContainer>
            <div>
                <StyledIconButton onClick={()=>setIsModal(prev => !prev)}>
                    <FaRegEdit />
                </StyledIconButton>
                <StyledIconButton onClick={()=>dispatch(deleteComment(commentData))}>
                    <FaTrashAlt />
                </StyledIconButton>
                
            </div>
            <LocalModal isModal={isModal} CloseModal={setIsModal}>
                <StyledForm onSubmit={submitComment}>
                    <label>Edit Comment:</label>
                    <StyledModalInput 
                        type="text" 
                        onChange={(e)=>setResetComment(prev => ({...prev,content:e.target.value}))}
                        value={resetComment.content}
                        required
                    />
                    <PrimaryStyledButton>Save</PrimaryStyledButton>
                </StyledForm>
            </LocalModal>
        </StyledCommentWrapper>
    )
}