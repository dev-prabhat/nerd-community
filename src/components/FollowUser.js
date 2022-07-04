import styled from "styled-components"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { StyledAvatarContainer } from "../styled.components"

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.text};
    display: flex;
    align-items:center;
    justify-content: space-around;
    border: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
    border-radius: 1rem;
    margin: 1rem 0.5rem;
`


export const FollowUser = ({user:{firstName,lastName,username,avatarURL}}) => {
    const {loggedUser} = useSelector(store => store.auth)
    if(loggedUser.username === username) {
        return (
            <StyledLink to={`/profile`}>
                <StyledAvatarContainer>
                    <img
                        className="img-responsive img-round"
                        src={avatarURL}
                        alt="avatar"
                    />
                </StyledAvatarContainer>
                <div>
                    <h4 className="head-sm">{firstName + lastName}</h4>
                    <h6 className="text-gray">@{username}</h6>
                </div>
            </StyledLink>
        )
    }
    return(
        <StyledLink to={`/profile/${username}`}>
            <StyledAvatarContainer>
                <img
                    className="img-responsive img-round"
                    src={avatarURL}
                    alt="avatar"
                />
            </StyledAvatarContainer>
            <div>
                <h4 className="head-sm">{firstName + lastName}</h4>
                <h6 className="text-gray">@{username}</h6>
            </div>
        </StyledLink>
    )
}