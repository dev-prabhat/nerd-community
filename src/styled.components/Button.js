import styled from "styled-components"

const PrimaryStyledButton = styled.button`
    border: 1px solid ${({theme}) => theme.colors.primaryThemeColor};
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: ${({theme}) => theme.colors.primaryThemeColor};
    border-radius: 2rem;
    color: ${({theme}) => theme.colors.secondaryThemeColor};
    cursor: pointer;
`

export { PrimaryStyledButton }