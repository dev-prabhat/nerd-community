import styled from "styled-components"

const StyledNav = styled.nav`
    grid-area: navbar;
    width: 20vw;
    margin: 0 auto;
    border-right: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
    ul {
        list-style-type: none;
    }
`

const StyledNavLink = styled.li`
    font-size: 1.5rem;
`

export { StyledNav, StyledNavLink }