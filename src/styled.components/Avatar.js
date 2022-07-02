import styled from "styled-components"

export const StyledAvatarContainer = styled.div`
    border-radius: 5rem;
    margin: 0.5rem;
    width: 4rem;

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}){
        width:2rem;
    }
`