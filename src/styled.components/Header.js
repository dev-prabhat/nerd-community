import styled from "styled-components"

const StyledHeaderWrapper = styled.header`
    width: 100%;
    padding: 0.5rem 1rem; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: header;
    border-bottom: 1px solid ${({theme}) => theme.colors.primaryThemeLightColor};
`

const StyledHeader = styled.h1`
    font-size: 2rem;
    color: ${({theme})=>theme.colors.primaryThemeColor};
`

export { StyledHeaderWrapper,StyledHeader }