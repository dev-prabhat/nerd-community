import { useDispatch , useSelector} from "react-redux"
import { logoutUser } from "../features/auth/authSlice"
import { setDarkTheme , setLightTheme } from "../features/theme/themeSlice"
import { StyledHeaderWrapper, StyledHeader , StyledIconButton} from "../styled.components"
import { FiLogOut } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Header = () => {
    const {theme} = useSelector(state => state.theme)
    const dispatch = useDispatch()
    console.log(theme)
    return(
        <StyledHeaderWrapper>
            <StyledHeader>
                SocialCircle
            </StyledHeader>
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