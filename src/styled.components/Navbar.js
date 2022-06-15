import styled from "styled-components"

const StyledNav = styled.nav`
    grid-area: navbar;
    width: 20vw;
    margin: 0 auto;
    position:fixed;
    top:10%;
    ul {
        list-style-type: none;
    }
`

const StyledNavLink = styled.li`
    font-size: 1.25rem;
`

export { StyledNav, StyledNavLink }