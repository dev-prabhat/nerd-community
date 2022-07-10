import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHeaderWrapper = styled.header`
    width: 95%;
    padding: 0.5rem 1rem; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: header;
    border-bottom: 1px solid ${({theme}) => theme.colors.primaryThemeLightColor};
    position:fixed;
    background-color: ${({theme}) => theme.body};
    z-index: 20;

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}) {
        width:100%;
        padding: 0.5rem; 
    }
`

const StyledHeader = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    color: ${({theme})=>theme.colors.primaryThemeColor};

    @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}) {
        font-size: 1.5rem;
    }

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}) {
        font-size: 10px;
    }
`

export { StyledHeaderWrapper,StyledHeader }