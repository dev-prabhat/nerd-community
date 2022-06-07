import { useState } from "react"
import { useSelector , useDispatch} from "react-redux"
import { Aside, LocalModal, NavBar, SinglePost } from "../components"
import { editUserProfile } from "../features/auth/authSlice"
import { MainContainer, Feed, PrimaryStyledButton, StyledProfileWrapper, StyledTextAreaWithBorder} from "../styled.components"

export const Profile = () => {
    const [isModal, setIsModal] = useState(false)
    const {posts} = useSelector(state => state.post)
    const {loggedUser} = useSelector(state => state.auth)
    const initialState = {...loggedUser}
    const {username,firstName,lastName,bio,avatarURL} = loggedUser
    const [editProfileData, setEditProfileData] = useState(initialState)
    const loggedUserPost = posts.filter(post =>  post.username === username)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        setIsModal(prev => !prev)
        dispatch(editUserProfile(editProfileData))
    }

    return(
        <MainContainer>
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
                        loggedUserPost.map(post => (
                            <SinglePost key={post._id} post={post} isProfilePage={true}/>
                        ))   
                    }
                    <LocalModal CloseModal={setIsModal} isModal={isModal}>
                        <div>
                            <label className="form-label">FirstName</label>
                            <input
                            type="text"
                            className="form-field border-radius-xs padding-xs"
                            placeholder="jon"
                            value={editProfileData.firstName}
                            onChange={(e)=>setEditProfileData(prev => ({...prev,firstName:e.target.value}))}
                            required
                            />

                            <label className="form-label">LastName: </label>
                            <input
                            type="text"
                            className="form-field border-radius-xs padding-xs"
                            placeholder="Doe"
                            value={editProfileData.lastName}
                            onChange={(e)=>setEditProfileData(prev =>({...prev,lastName:e.target.value}))}
                            required
                            />

                            <label className="form-label">Bio: </label>
                            <StyledTextAreaWithBorder
                            type="text"
                            className="form-field border-radius-xs padding-xs"
                            placeholder="write here bio..."
                            value={editProfileData.bio}
                            onChange={(e)=>setEditProfileData(prev => ({...prev,bio:e.target.value}))}
                            required
                            />
                            <PrimaryStyledButton onClick={handleSubmit}>Save</PrimaryStyledButton>
                        </div>
                    </LocalModal>
                </Feed>
            <Aside/>
        </MainContainer>
    )
}