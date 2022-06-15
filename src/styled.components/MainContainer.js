import styled from 'styled-components'

export const MainContainer = styled.main`
    display: grid;
    min-height: 100vh;
    width: 90vw;
    margin: 0 auto;
    grid-template-areas: 
      "header header header"
      "navbar feed sidebar";
`

