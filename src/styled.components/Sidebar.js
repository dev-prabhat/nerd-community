import styled from "styled-components"

export const StyledSidebar = styled.aside`
   grid-area: sidebar;
   width: 20vw;
   margin: 0 auto;
   border-left: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
`