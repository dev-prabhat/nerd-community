import styled from "styled-components"

export const StyledSidebar = styled.aside`
   grid-area: sidebar;
   width: 20%;
   margin: 0 auto;
   position: fixed;
   top: 4rem;
   right: 1rem;
   height:25rem;
   overflow-y: scroll;
   scroll-behavior: smooth;

   @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}) {
      display: none;
   }
`