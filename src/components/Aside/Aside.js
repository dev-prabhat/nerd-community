import { StyledSidebar } from "../../styled.components";
import { useSelector } from "react-redux";
import { FollowUser } from "../FollowUser";
import "./aside.css"

export const Aside = () => {
  const {users,loggedUser} = useSelector(state => state.auth)
  const usersExceptLoggedUser = [...users].filter(user => user.username !== loggedUser.username)

    return(
      <StyledSidebar>
          <div className="search__wrapper">
              <input 
                className="search__field border-radius-sm text-center" 
                type="text" 
                placeholder="Search user here"/>
          </div>
          <div className="users__wrapper">
             {
               usersExceptLoggedUser.map(user => (
                 <FollowUser key={user._id} user={user}/>
               ))
             }
          </div>
      </StyledSidebar>
    )
}