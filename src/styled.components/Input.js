import styled from "styled-components"

const StyledInput = styled.input`
    width: 100%;
    padding: 5px 10px;
    border: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.darkThemeColor};
    font-size: 1rem;
    margin:0px 10px
`

const StyledModalInput = styled.input`
    padding: 0.5rem;
    margin: 0.5rem 0;
    font-size: 1rem;
    width:100%
`

export { StyledInput, StyledModalInput}