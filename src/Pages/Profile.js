import { useParams } from "react-router-dom"
import { useSelector , useDispatch} from "react-redux"
import { Aside, Header, LocalModal, NavBar, SinglePost} from "../components"
import { followUserFromDB, unfollowUserFromDB } from "../features/auth/authSlice"
import { useDocument, useWindowScroll } from "../customHooks"
import { 
    MainContainer, 
    Feed, 
    PrimaryStyledButton, 
    StyledProfileWrapper,
    FollowerStyledButton,  
    } from "../styled.components"

import { TiUserAddOutline,TiUserDelete } from "react-icons/ti";
import { RowFlexContainer } from "../styled.components/Post"
import { FollowUser } from "../components/FollowUser"
import { useState } from "react"

export const Profile = () => {
    useWindowScroll()
    const {name} = useParams()
    const {posts} = useSelector(state => state.post)
    const [showFollowingModal, setShowFollowingModal] = useState(false)
    const [showFollowerModal, setShowFollowerModal] = useState(false)
    const {loggedUser,users} = useSelector(state => state.auth)
    const profile = users.find(user => user.username === name)
    const {username,firstName,lastName,bio,avatarURL,following,followers,_id} = profile
    const {following:loggedUserFollowing} = loggedUser
    const userPosts = posts.filter(post =>  post.username === name)
    const isFollowing = loggedUserFollowing.findIndex(usersFollowed => usersFollowed.username === name) === -1 ? false : true
    const dispatch = useDispatch()
    useDocument(`${firstName} ${lastName}`)
    return(
        <MainContainer>
            <Header/>
            <NavBar/>
                <Feed>
                    <StyledProfileWrapper>
                        <div className="avatar avatar-md ">
                            {
                                avatarURL?
                                <img
                                className="img-responsive img-round "
                                src={avatarURL}
                                alt="avatar"
                            />:
                            <div className="avatar avatar-text avatar-text-md">
                               {`${firstName.slice(0,1).toUpperCase()}${ lastName.slice(0,1).toUpperCase()}`}
                            </div>
                            }
                        </div>
                        <div className="margin-sm text-center">
                            <h1 className="head-sm">{firstName} {lastName}</h1>
                            <h2 className="head-sm text-gray">@{username}</h2>
                            <p className="text-sm">{bio}</p>
                        </div>
                        {
                            isFollowing ?
                            <PrimaryStyledButton onClick={()=>dispatch(unfollowUserFromDB(_id))}>
                                <TiUserAddOutline/> Unfollow
                            </PrimaryStyledButton> :
                            <PrimaryStyledButton onClick={()=>dispatch(followUserFromDB(_id))}>
                                <TiUserDelete/> Follow
                            </PrimaryStyledButton>
                        }  
                        <RowFlexContainer>
                            <FollowerStyledButton onClick={()=>setShowFollowingModal(prev => !prev)}>
                                {following.length} Following
                            </FollowerStyledButton>
                            <FollowerStyledButton onClick={()=>setShowFollowerModal(prev => !prev)}>
                                {followers.length} Followers
                            </FollowerStyledButton>
                        </RowFlexContainer>
                    </StyledProfileWrapper>
                        <div>
                           {
                                userPosts.map(post => (
                                    <SinglePost key={post._id} post={post}/>))   
                            }
                        </div>
                        <LocalModal isModal={showFollowingModal} CloseModal={setShowFollowingModal}>
                            {
                                following.length === 0 ?
                                <h1>No Following</h1>
                                :
                                following.map(userFollowing => (
                                    <FollowUser key={userFollowing._id} user={userFollowing}/>
                                ))
                            }
                        </LocalModal>
                        <LocalModal isModal={showFollowerModal} CloseModal={setShowFollowerModal}>
                            {
                                followers.length === 0 ?
                                <h1>No Following</h1>
                                :
                                followers.map(userFollower => (
                                    <FollowUser key={userFollower._id} user={userFollower}/>
                                ))
                            }
                        </LocalModal>
                </Feed>
            <Aside/>
        </MainContainer>
    )
}