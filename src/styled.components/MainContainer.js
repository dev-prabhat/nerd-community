import styled from 'styled-components'

export const MainContainer = styled.main`
  display: grid;
  min-height: 100vh;
  width: 95%;
  margin: 0 auto;
  grid-template-columns: 0.20fr 0.70fr 0.20fr;
  grid-template-areas: 
    "header header header"
    "navbar feed sidebar";
  
  @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas: 
        "header"
        "feed";
  }
`

