import styled from "styled-components"

export const StyledAvatarContainer = styled.div`
    border-radius: 5rem;
    margin: 0.5rem;
    width: 4rem;

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}){
        width:2rem;
    }
`

export const StyledAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    border-radius: 5rem;
    background-color: ${({theme}) => theme.colors.primaryThemeColor};
    color: ${({theme}) => theme.colors.secondaryThemeColor};
    font-size: 2rem;

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}){
        font-size:1rem;
    }    
`