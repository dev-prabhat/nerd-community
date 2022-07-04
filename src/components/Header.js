import { useState } from "react"
import { useDispatch , useSelector} from "react-redux"
import { logoutUser } from "../features/auth/authSlice"
import { setDarkTheme , setLightTheme } from "../features/theme/themeSlice"
import { 
    StyledHeaderWrapper, 
    StyledHeader, 
    StyledIconButton, 
    StyledSearch, 
    StyledSearchWrapper, 
    StyledSearchUsersContainer} from "../styled.components"
import { FiLogOut } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SearchUser } from "./SearchUser"


export const Header = () => {
    const [searchUser, setSearchUser] = useState("")
    const {users} = useSelector(state => state.auth)
    const {theme} = useSelector(state => state.theme)
    const dispatch = useDispatch()
    
    let searchUsers = [...users].filter(user => user.firstName.toLowerCase().includes(searchUser.trim().toLowerCase()) )
    return(
        <StyledHeaderWrapper>
            <StyledHeader to="/home">
                SocialCircle
            </StyledHeader>
            <StyledSearchWrapper>
                <StyledSearch
                    onChange={(e)=>setSearchUser(e.target.value)}
                    value={searchUser} 
                    type="text" 
                    placeholder="Search user here"/>
                <StyledSearchUsersContainer style={{ display: searchUser === "" ? "none" : "block" }}>
                    {searchUsers.map(user => 
                        <SearchUser key={user.username} user={user}/>
                        )}
                </StyledSearchUsersContainer>
            </StyledSearchWrapper>
            <div>
                {
                   theme === "darkTheme" ? 
                   <StyledIconButton onClick={()=>dispatch(setLightTheme())}>
                      <MdLightMode/>
                   </StyledIconButton>
                   :
                   <StyledIconButton onClick={()=>dispatch(setDarkTheme())}>
                      <MdDarkMode/>
                   </StyledIconButton>
                }
                <StyledIconButton onClick={()=>dispatch(logoutUser())}>
                    <FiLogOut />
                </StyledIconButton>
            </div>
        </StyledHeaderWrapper>
    )
}