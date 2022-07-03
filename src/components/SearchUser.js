import styled from "styled-components"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const StyledLink = styled(Link)`
   display: flex;
   width: auto;
   margin: 5px;
   text-decoration: none;
   color:${({theme}) => theme.text}
`

const SearchUserAvatar = styled.div`
    width: 2rem;
    margin: 0.5rem;
    border-radius: 5rem;

    @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}) {
        display: none;
    }
`

export const SearchUser = ({user:{firstName,lastName,avatarURL,username}}) => {
    const {loggedUser} = useSelector(state => state.auth)
    if(loggedUser.username === username){
        return(
            <StyledLink to={`/profile`}>
                <SearchUserAvatar>
                    <img
                        className="img-responsive img-round"
                        src={avatarURL}
                        alt="avatar"
                    />
                </SearchUserAvatar>
                <div className="margin-xs">
                    <p>{`${firstName} ${lastName}`}</p>
                    <h4 className="text-xs">@{username}</h4>
                </div>
            </StyledLink>
        )
    }
    return(
        <StyledLink to={`/profile/${username}`}>
            <SearchUserAvatar>
                <img
                    className="img-responsive img-round"
                    src={avatarURL}
                    alt="avatar"
                />
            </SearchUserAvatar>
            <div className="margin-xs">
                <p>{`${firstName} ${lastName}`}</p>
                <h4 className="text-xs">@{username}</h4>
            </div>
        </StyledLink>
    )
}