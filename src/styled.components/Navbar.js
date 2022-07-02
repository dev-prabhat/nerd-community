import styled from "styled-components"

const StyledNav = styled.nav`
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    grid-area: navbar;
    width: 20%;
    margin-top:4rem;
    position:fixed;
    ul {
        list-style-type: none;
    }
    z-index: 20;
    

    @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}) {
        border-top: 1px solid ${({theme}) => theme.colors.primaryThemeColor};
        width: 95%;
        bottom: 0;
      ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
`

const StyledNavLink = styled.li`
    font-size: 1.25rem;

    @media screen and (max-width:${({theme}) => theme.breakpoints.table}){
      font-size:1rem
    }

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}){
      font-size:10px
    }
`

export { StyledNav, StyledNavLink }