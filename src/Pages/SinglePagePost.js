import styled from "styled-components"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useParams,Link } from "react-router-dom"
import { postComment , getComments} from "../features/comment/commentSlice"
import { dislikePost, likePost , addToBookmark, removeFromBookmark } from "../features/post/postSlice"
import { Aside, Header, NavBar , Loader} from "../components"
import { Feed, MainContainer, StyledPost , StyledInput, StyledIconButton, StyledAvatarContainer} from "../styled.components"
import { FlexContainer, RowFlexContainer } from "../styled.components/Post"

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdBookmarkBorder , MdBookmark , MdSend} from "react-icons/md";
import { Comment } from "../components/Comment"
import { StyledRowForm } from "../styled.components/Form"
import { useWindowScroll } from "../customHooks" 

const StyledLink = styled(Link)`
  text-decoration:none;
`

const StyledUserName = styled.h3`
    text-decoration:none;
    color:${({theme}) => theme.text}
`

export const SinglePagePost = () => {
    useWindowScroll()
    const {posts, bookmarkPosts} = useSelector(state => state.post)
    const {loggedUser} = useSelector(state => state.auth)
    const {comments, isComment} = useSelector(state => state.comment)
    const reverseComments = [...comments].reverse()
    const [comment, setComment] = useState("")
    const {postId} = useParams()
    const postData = posts.find(post => post._id === postId)
    const {username, firstName, lastName, content,avatarURL,likes:{likedBy}} = postData

    const isLiked = likedBy.findIndex(like => like.username === loggedUser.username) === -1 ? false : true
    const isBookMarked = bookmarkPosts.findIndex(post => post._id === postId) === -1 ? false : true
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getComments(postId))
    },[])

    const postHandler = (e) => {
        e.preventDefault()
        if(comment.trim() === "") return toast.error("Invalid Input...",{duration:1000})
        dispatch(postComment({postId,comment}))
        setComment("")
    }

    return(
        <MainContainer>
            <Header/>
            <NavBar/>
                <Feed>
                   <StyledPost>
                       <FlexContainer>
                           <RowFlexContainer>
                           {avatarURL?
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
                            </StyledAvatarContainer>}
                            
                            <div className="margin-xs">
                                {loggedUser.username === username ?
                                <StyledLink to={`/profile`}> 
                                    <h5 className="text-gray">@{username}.</h5>
                                    <StyledUserName className="head-sm">
                                    {`${loggedUser.firstName} ${loggedUser.lastName}`}
                                    </StyledUserName>
                                </StyledLink>
                                :
                                <StyledLink to={`/profile/${username}`}> 
                                <h5 className="text-gray">@{username}.</h5>
                                    <StyledUserName className="head-sm">
                                    {`${firstName} ${lastName}`}
                                    </StyledUserName>
                                </StyledLink>}
                            </div>
                           </RowFlexContainer>
                       </FlexContainer>
                       <div className="content__wrapper">
                          <p className="text-sm margin-xs">{content}</p>
                       </div>
                       <div className="padding-xs">
                            {
                                isLiked ?
                                <StyledIconButton onClick={()=>dispatch(dislikePost(postId))}>
                                    <FaHeart />
                                </StyledIconButton> 
                                :
                                <StyledIconButton onClick={()=>dispatch(likePost(postId))} >
                                    <FaRegHeart />
                                </StyledIconButton>
                                 
                            }
                            {
                                isBookMarked ? 
                                <StyledIconButton onClick={()=>dispatch(removeFromBookmark(postId))}>
                                    <MdBookmark /> 
                                </StyledIconButton>
                               :
                               <StyledIconButton onClick={()=>dispatch(addToBookmark(postId))}>
                                    <MdBookmarkBorder />
                               </StyledIconButton>
                            }
                        </div>
                            <StyledRowForm onSubmit={postHandler}>
                                <StyledInput 
                                type="text"
                                placeholder="write any comment..." 
                                onChange={(e)=>setComment(e.target.value)}
                                value={comment}
                                />
                                <StyledIconButton onClick={postHandler}>
                                    <MdSend />
                                </StyledIconButton>
                            </StyledRowForm>
                   </StyledPost>
                    {
                        isComment ? 
                        <Loader/>:
                       <div>
                         {
                            reverseComments.map(comment => (
                               <Comment key={comment._id} comment={comment} postId={postId}/>
                            ))
                          }
                       </div>
                    }
                </Feed>
            <Aside/>
        </MainContainer>
    )
}