import { NavLink } from "react-router-dom"
import "./navbar.css"

const activeStyle = ({isActive}) => isActive ? 
"btn-link margin-xs d-block font-weight-semibold text-center active-style" : 
"btn-link margin-xs d-block font-weight-semibold text-center"

export const NavBar = () => {
    return(
      <nav className="navbar-wrapper">  
        <ul class=" list-style-none d-inline_block navbar">
            <li>
                <NavLink className={activeStyle} to="/home">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={activeStyle} to="/bookmark">
                    Bookmark
                </NavLink>
            </li>
            <li>
                <NavLink className={activeStyle} to="/explore">
                    Explore
                </NavLink>
            </li>
            <li>
                <NavLink className={activeStyle} to="/profile">
                    Proflie
                </NavLink>
            </li>
          </ul>
      </nav>
    )
}