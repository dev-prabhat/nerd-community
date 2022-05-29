import { NavLink } from "react-router-dom"
import { StyledNav , StyledNavLink} from "../../styled.components"
import "./navbar.css"

const activeStyle = ({isActive}) => isActive ? 
"btn-link margin-xs d-block font-weight-semibold active-style" : 
"btn-link margin-xs d-block font-weight-semibold"

const NavArray = ["Home","Bookmark","Explore","Profile"]

export const NavBar = () => {
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
      </StyledNav>
    )
}