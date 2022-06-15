import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { postComment , getComments} from "../features/comment/commentSlice"
import { dislikePost, likePost , addToBookmark, removeFromBookmark } from "../features/post/postSlice"
import { Aside, Header, NavBar , Loader} from "../components"
import { Feed, MainContainer, StyledPost , StyledInput, StyledIconButton} from "../styled.components"
import { FlexContainer, RowFlexContainer } from "../styled.components/Post"

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdBookmarkBorder , MdBookmark , MdSend} from "react-icons/md";
import { Comment } from "../components/Comment"
import { StyledRowForm } from "../styled.components/Form"

export const SinglePagePost = () => {
    const {posts, bookmarkPosts} = useSelector(state => state.post)
    const {loggedUser} = useSelector(state => state.auth)
    const {comments, isComment} = useSelector(state => state.comment)
    const reverseComments = [...comments].reverse()
    const [comment, setComment] = useState("")
    const {postId} = useParams()
    const postData = posts.filter(post => post._id === postId)
    const {username,content,avatarURL,likes:{likedBy}} = postData[0]


    const isLiked = likedBy.findIndex(like => like._id === loggedUser._id) === -1 ? false : true
    const isBookMarked = bookmarkPosts.findIndex(post => post._id === postId) === -1 ? false : true
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getComments(postId))
    },[])

    const postHandler = (e) => {
        e.preventDefault()
        if(comment.trim() === "") return alert("Invalid Input...")
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
                            <div className="avatar avatar-sm margin-xs">
                                <img
                                className="img-responsive img-round "
                                src={avatarURL}
                                alt="avatar"
                                />
                            </div>
                            <h5 className="text-gray margin-xs">@{username}</h5>
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