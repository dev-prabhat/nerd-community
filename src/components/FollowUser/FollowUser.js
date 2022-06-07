import { useDispatch, useSelector } from "react-redux"
import { followUserFromDB , unfollowUserFromDB} from "../../features/auth/authSlice"
import { StyledUserContainer , PrimaryStyledButton} from "../../styled.components"
// import {PrimaryStyledButton } from "../../styled.components/Button"

export const FollowUser = ({user:{_id,firstName,lastName,username,avatarURL}}) => {
    const {loggedUser:{following}} = useSelector(state => state.auth)
    const isFollowing = following.findIndex(usersFollowed => usersFollowed._id === _id) === -1 ? false : true 
    const dispatch = useDispatch()
    return(
        <StyledUserContainer>
            <div className="avatar avatar-sm margin-xs">
                <img
                className="img-responsive img-round"
                src={avatarURL}
                alt="avatar"
                />
            </div>
            <div>
                <h3 className="head-sm">{firstName + lastName}</h3>
                <h6 className="text-gray">@{username}</h6>
            </div>
            {
                isFollowing ? 
                <PrimaryStyledButton onClick={()=>dispatch(unfollowUserFromDB(_id))}>UnFollow</PrimaryStyledButton> :
                <PrimaryStyledButton onClick={()=>dispatch(followUserFromDB(_id))}>Follow</PrimaryStyledButton>
            }
        </StyledUserContainer>
    )
}