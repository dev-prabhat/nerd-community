import { StyledSidebar } from "../styled.components";
import { useSelector } from "react-redux";
import { FollowUser } from "./FollowUser";

export const Aside = () => {
  const {users,loggedUser} = useSelector(state => state.auth)
  const usersExceptLoggedUser = [...users].filter(user => user.username !== loggedUser.username)

    return(
      <StyledSidebar>
        {
          usersExceptLoggedUser.map(user => (
            <FollowUser key={user._id} user={user}/>
          ))
        }
      </StyledSidebar>
    )
}