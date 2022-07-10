import { useState } from "react"
import toast from "react-hot-toast"
import { useSelector , useDispatch} from "react-redux"
import { Aside, Header, LocalModal, NavBar, SinglePost ,Loader} from "../components"
import { FollowUser } from "../components/FollowUser"
import { editUserProfile } from "../features/auth/authSlice"
import { useDocument, useWindowScroll } from "../customHooks"
import { 
    MainContainer, 
    Feed, 
    PrimaryStyledButton, 
    StyledProfileWrapper, 
    StyledTextAreaWithBorder, 
    StyledLabel,
    StyledModalInput,
    FollowerStyledButton,
    StyledForm} from "../styled.components"
import { RowFlexContainer } from "../styled.components/Post"

export const LoggedUserProfile = () => {
    useWindowScroll()
    const [isModal, setIsModal] = useState(false)
    const [showFollowingModal, setShowFollowingModal] = useState(false)
    const [showFollowerModal, setShowFollowerModal] = useState(false)
    const {posts, isPostEdit} = useSelector(state => state.post)
    const {loggedUser} = useSelector(state => state.auth)
    const {username,firstName,lastName,bio,avatarURL,following,followers} = loggedUser
    const [editProfileData, setEditProfileData] = useState({...loggedUser})
    const loggedUserPost = posts.filter(post =>  post.username === username)
    useDocument(`${firstName} ${lastName}`)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(editProfileData.firstName.trim() === "" || editProfileData.lastName.trim() === "" || editProfileData.bio.trim() === "") return toast.error("Enter all fields...",{duration:2000})
        setIsModal(prev => !prev)
        dispatch(editUserProfile(editProfileData))
    }

    return(
        <MainContainer>
            <Header/>
            <NavBar/>
                <Feed>
                    <StyledProfileWrapper>
                        {
                            avatarURL?
                            <div className="avatar avatar-md">
                                <img
                                    className="img-responsive img-round"
                                    src={avatarURL}
                                    alt="avatar"
                                />
                            </div>:
                            <div className="avatar avatar-md">
                               <div className="img-round avatar-text avatar-text-md"> 
                                    {`${firstName.slice(0,1).toUpperCase()}${ lastName.slice(0,1).toUpperCase()}`}
                                </div>
                            </div>
                        }
                        <div className="margin-sm text-center">
                            <h1 className="head-sm">{firstName} {lastName}</h1>
                            <h2 className="head-sm text-gray">@{username}</h2>
                            <p className="text-sm">{bio}</p>
                        </div>
                        <PrimaryStyledButton onClick={()=>setIsModal(prev => !prev)}>
                                Edit Profile
                        </PrimaryStyledButton>
                        <RowFlexContainer>
                            <FollowerStyledButton onClick={()=>setShowFollowingModal(prev => !prev)}>
                                {following.length} Following
                            </FollowerStyledButton>
                            <FollowerStyledButton onClick={()=>setShowFollowerModal(prev => !prev)}>
                                {followers.length} Followers
                            </FollowerStyledButton>
                        </RowFlexContainer>
                    </StyledProfileWrapper>
                    {
                        isPostEdit ? <Loader/> :
                        <div>
                           {
                                loggedUserPost.map(post => (
                                    <SinglePost key={post._id} post={post} isProfilePage={true}/>))   
                            }
                        </div>
                    }
                    <LocalModal CloseModal={setIsModal} isModal={isModal}>
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledLabel>FirstName:</StyledLabel>
                            <StyledModalInput
                                type="text"
                                value={editProfileData.firstName}
                                onChange={(e)=>setEditProfileData(prev => ({...prev,firstName:e.target.value}))}
                                required
                            />

                            <StyledLabel>LastName: </StyledLabel>
                            <StyledModalInput
                                type="text"
                                value={editProfileData.lastName}
                                onChange={(e)=>setEditProfileData(prev =>({...prev,lastName:e.target.value}))}
                                required
                            />

                            <StyledLabel>Bio: </StyledLabel>
                            <StyledTextAreaWithBorder
                                type="text"
                                value={editProfileData.bio}
                                onChange={(e)=>setEditProfileData(prev => ({...prev,bio:e.target.value}))}
                                required
                            />
                            <PrimaryStyledButton>
                                Save
                            </PrimaryStyledButton>
                        </StyledForm>
                    </LocalModal>
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
                            <h1>No Followers</h1> 
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