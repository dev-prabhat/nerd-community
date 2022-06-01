import { useDispatch, useSelector } from "react-redux"
import { followUserFromDB , unfollowUserFromDB} from "../../features/auth/authSlice"
import { StyledUserContainer } from "../../styled.components/Users"
import {PrimaryStyledButton } from "../../styled.components/Button"

export const FollowUser = ({user:{_id,firstName,lastName,username}}) => {
    const {loggedUser:{following}} = useSelector(state => state.auth)
    const isFollowing = following.findIndex(usersFollowed => usersFollowed._id === _id) === -1 ? false : true 
    const dispatch = useDispatch()
    const avatar = firstName.slice(0,1)+lastName.slice(0,1)
    return(
        <StyledUserContainer>
            <div className="avatar avatar-text avatar-text-xs margin-xs padding-xs">{avatar.toUpperCase()}</div>
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