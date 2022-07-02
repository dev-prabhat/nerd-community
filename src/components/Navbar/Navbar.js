import { useDispatch} from "react-redux"
import { NavLink } from "react-router-dom"
import { OpenPostModal } from "../../features/modal/modalSlice"
import { StyledNav , StyledNavLink} from "../../styled.components"
import { PrimaryPostButton } from "../../styled.components/Button"
import "./navbar.css"

const activeStyle = ({isActive}) => isActive ? 
"btn-link margin-xs d-block font-weight-semibold active-style" : 
"btn-link margin-xs d-block font-weight-semibold"

export const NavBar = () => {
    const dispatch = useDispatch()
    return(
      <StyledNav>  
        <ul>
            <StyledNavLink>
                <NavLink className={activeStyle} to="/home">
                  Home
                </NavLink>
            </StyledNavLink>
            <StyledNavLink>
                <NavLink className={activeStyle} to="/bookmark">
                  Bookmark
                </NavLink>
            </StyledNavLink>
            <StyledNavLink>
                <NavLink className={activeStyle} to="/explore">
                  Explore
                </NavLink>
            </StyledNavLink>
            <StyledNavLink>
                <NavLink className={activeStyle} to="/profile">
                  Profile
                </NavLink>
            </StyledNavLink>
          </ul>
          <PrimaryPostButton onClick={()=>dispatch(OpenPostModal())}>Create Post</PrimaryPostButton>
      </StyledNav>
    )
}