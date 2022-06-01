import styled from "styled-components"

export const StyledSidebar = styled.aside`
   grid-area: sidebar;
   border-left: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
`