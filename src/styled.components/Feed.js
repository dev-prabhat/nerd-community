import styled from 'styled-components'

export const Feed = styled.div`
    grid-area: feed;
    width: 90%;
    min-height: 90vh;
    margin: 4rem 3rem;
    padding: 10px;
    border: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
    border-radius: 5px;

    @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}){
        width: 100%;
        margin: 4rem 0;
    }

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}){
        margin: 3rem 0;   
    }
`