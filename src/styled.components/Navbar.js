import styled from "styled-components"

const StyledNav = styled.nav`
    grid-area: navbar;
    width: 20vw;
    border-right: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
    ul {
        list-style-type: none;
    }
`

const StyledNavLink = styled.li`
    width: 80%;
    font-size: 1.5rem;
`

export { StyledNav, StyledNavLink }