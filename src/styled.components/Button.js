import styled from "styled-components"

const PrimaryStyledButton = styled.button`
    border: none;
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: ${({theme}) => theme.colors.primaryThemeColor};
    border-radius: 1rem;
    color: ${({theme}) => theme.colors.secondaryThemeColor};
    cursor: pointer;
`

const PrimaryPostButton = styled(PrimaryStyledButton)`
   font-size:1.5rem;

   @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}){
    display:none;
   }
`

const StyledIconButton = styled.button`
    border: none;
    color:${({theme})=> theme.colors.primaryThemeColor};
    font-size:1.5rem;
    background-color: ${({theme}) => theme.body};
    cursor:pointer;
    margin: 0 0.5rem;

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}){
        font-size:1rem;
    }
`

const FollowerStyledButton = styled.button`
   margin: 5px 10px;
   background-color: ${({theme}) => theme.body};
   color: ${({theme}) => theme.text};
   cursor:pointer;
   border: none;
`

export { PrimaryStyledButton , PrimaryPostButton, StyledIconButton ,FollowerStyledButton}