import { useState } from "react"
import { useSelector , useDispatch} from "react-redux"
import { OpenEditProfileModal , CloseEditProfileModal} from "../features/modal/modalSlice"
import { Aside, Modal, NavBar, SinglePost } from "../components"
import { editUserProfile } from "../features/auth/authSlice"
import { MainContainer , Feed} from "../styled.components"
import { PrimaryStyledButton } from "../styled.components/Button"
import { StyledProfileWrapper } from "../styled.components/ProfileWrapper"
import { StyledTextAreaWithBorder } from "../styled.components/TextArea"

export const Profile = () => {
    const {posts} = useSelector(state => state.post)
    const {loggedUser} = useSelector(state => state.auth)
    const {isEditProfileModal} = useSelector(state => state.modal)
    const initialState = {...loggedUser}
    const {username,firstName,lastName,bio,avatarURL} = loggedUser
    const [editProfileData, setEditProfileData] = useState(initialState)
    const loggedUserPost = posts.filter(post =>  post.username === username)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(CloseEditProfileModal())
        dispatch(editUserProfile(editProfileData))
    }

    return(
        <MainContainer>
            <NavBar/>
                <Feed>
                    <StyledProfileWrapper>
                        <div className="avatar avatar-md ">
                            <img
                            class="img-responsive img-round "
                            src={avatarURL}
                            alt="avatar"
                            />
                        </div>
                        <div className="margin-sm text-center">
                            <h1 className="head-sm">{firstName} {lastName}</h1>
                            <h2 className="head-sm text-gray">@{username}</h2>
                            <p className="text-sm">{bio}</p>
                        </div>
                        <PrimaryStyledButton onClick={()=>dispatch(OpenEditProfileModal())}>Edit Profile</PrimaryStyledButton>
                    </StyledProfileWrapper>
                    {
                        loggedUserPost.map(post => (
                            <SinglePost key={post._id} post={post} isProfilePage={true}/>
                        ))   
                    }
                    <Modal CloseModal={CloseEditProfileModal} isModal={isEditProfileModal}>
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
                    </Modal>
                </Feed>
            <Aside/>
        </MainContainer>
    )
}