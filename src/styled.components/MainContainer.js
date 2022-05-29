import styled from 'styled-components'

export const MainContainer = styled.main`
    display: grid;
    min-height: 100vh;
    width: 95%;
    margin: 0 auto;

    grid-template-areas: 
      "navbar feed sidebar";

    grid-gap: 0.5rem;
`

