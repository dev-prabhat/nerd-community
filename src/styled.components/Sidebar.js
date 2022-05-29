import styled from "styled-components"

export const StyledSidebar = styled.aside`
   grid-area: sidebar;
   width: 20vw;
   border-left: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
`