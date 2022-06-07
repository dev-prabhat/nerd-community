import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { OpenPostModal } from "../../features/modal/modalSlice"
import { StyledNav , StyledNavLink} from "../../styled.components"
import { PrimaryPostButton } from "../../styled.components/Button"
import "./navbar.css"

const activeStyle = ({isActive}) => isActive ? 
"btn-link margin-xs d-block font-weight-semibold active-style" : 
"btn-link margin-xs d-block font-weight-semibold"

const NavArray = ["Home","Bookmark","Explore","Profile"]

export const NavBar = () => {
    const dispatch = useDispatch()
    return(
      <StyledNav>  
        <ul>
            {
                NavArray.map((navitem) => (
                    <StyledNavLink key={navitem}>
                        <NavLink className={activeStyle} to={`/${navitem.toLowerCase()}`}> 
                            {navitem}
                        </NavLink>
                    </StyledNavLink>
                ))
            }
          </ul>
          <PrimaryPostButton onClick={()=>dispatch(OpenPostModal())}>Create Post</PrimaryPostButton>
      </StyledNav>
    )
}