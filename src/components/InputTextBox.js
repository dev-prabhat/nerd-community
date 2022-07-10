import styled from "styled-components"
import toast from "react-hot-toast"
import { BsEmojiSmile } from "react-icons/bs";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Picker from "emoji-picker-react"
import { addNewPost } from "../features/post/postSlice"
import { StyledIconButton, StyledForm, StyledTextArea, StyledTextAreaWrapper, PrimaryStyledButton, StyledAvatarContainer } from "../styled.components"
import { ClosePostModal } from "../features/modal/modalSlice";

const EmojiPickerWrapper = styled.div`
   position: absolute;
   top:11rem;
   left:4rem;
   z-index: 20;

   @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}) {
    left: 0;
   }
`

export const InputTextBox = () => {
    const [isEmojiVisible, setIsEmojiVisible] = useState(false)
    const [postObj, setPostObj] = useState("")
    const {loggedUser:{avatarURL, firstName, lastName}} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const postHandler = (e) => {
        e.preventDefault()
        if(postObj.trim() === "") return toast.error("Enter some content",{duration:2000})
        dispatch(addNewPost(postObj))
        setPostObj("")
        dispatch(ClosePostModal())
    }

    const onEmojiClick = (e, emojiObject) => {
        e.preventDefault()
        setPostObj(prev =>prev + emojiObject.emoji)
    }

    return(
        <StyledTextAreaWrapper>
            {avatarURL ?
            <StyledAvatarContainer>
                <img
                    className="img-responsive img-round "
                    src={avatarURL}
                    alt="avatar"
                />
            </StyledAvatarContainer>:
            <StyledAvatarContainer>
                <div className="img-round avatar-text">
                    {`${firstName.slice(0,1).toUpperCase()}${ lastName.slice(0,1).toUpperCase()}`}
                </div>
            </StyledAvatarContainer> 
            }
            <div className="d-100">
                <StyledForm>
                    <StyledTextArea 
                        rows="4" 
                        cols="50"
                        placeholder="Write your thought..."
                        onChange={(e)=>setPostObj(e.target.value)}
                        value={postObj}
                        />
                </StyledForm>  
                <div className="d-flex">
                    <StyledIconButton onClick={()=>setIsEmojiVisible(prev =>!prev)}> 
                        <BsEmojiSmile/>
                    </StyledIconButton>
                    <PrimaryStyledButton onClick={postHandler}> Post </PrimaryStyledButton>
                </div>
                
            </div>
            {isEmojiVisible && 
                <EmojiPickerWrapper>
                    <Picker onEmojiClick={onEmojiClick}/>
                </EmojiPickerWrapper>}
    </StyledTextAreaWrapper>
    )
}