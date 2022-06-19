import styled from "styled-components"
import { Link } from "react-router-dom"

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
    return(
        <StyledLink to={`/profile/${username}`}>
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
        </StyledLink>
    )
}