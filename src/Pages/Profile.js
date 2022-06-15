import { useState } from "react"
import { useSelector , useDispatch} from "react-redux"
import { Aside, Header, LocalModal, NavBar, SinglePost ,Loader} from "../components"
import { editUserProfile } from "../features/auth/authSlice"
import { 
    MainContainer, 
    Feed, 
    PrimaryStyledButton, 
    StyledProfileWrapper, 
    StyledTextAreaWithBorder, 
    StyledLabel,
    StyledModalInput,
    StyledForm} from "../styled.components"

export const Profile = () => {
    const [isModal, setIsModal] = useState(false)
    const {posts, isPostEdit} = useSelector(state => state.post)
    const {loggedUser} = useSelector(state => state.auth)
    const initialState = {...loggedUser}
    const {username,firstName,lastName,bio,avatarURL} = loggedUser
    const [editProfileData, setEditProfileData] = useState(initialState)
    const loggedUserPost = posts.filter(post =>  post.username === username)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(editProfileData.firstName.trim() === "" 
           && editProfileData.lastName.trim() === ""
           && editProfileData.bio.trim() === "") return alert("Invalid input...")
        setIsModal(prev => !prev)
        dispatch(editUserProfile(editProfileData))
    }

    return(
        <MainContainer>
            <Header/>
            <NavBar/>
                <Feed>
                    <StyledProfileWrapper>
                        <div className="avatar avatar-md ">
                            <img
                            className="img-responsive img-round "
                            src={avatarURL}
                            alt="avatar"
                            />
                        </div>
                        <div className="margin-sm text-center">
                            <h1 className="head-sm">{firstName} {lastName}</h1>
                            <h2 className="head-sm text-gray">@{username}</h2>
                            <p className="text-sm">{bio}</p>
                        </div>
                        <PrimaryStyledButton onClick={()=>setIsModal(prev => !prev)}>Edit Profile</PrimaryStyledButton>
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
                            <PrimaryStyledButton>Save</PrimaryStyledButton>
                        </StyledForm>
                    </LocalModal>
                </Feed>
            <Aside/>
        </MainContainer>
    )
}