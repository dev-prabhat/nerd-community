import styled from 'styled-components'

export const MainContainer = styled.main`
    display: grid;
    min-height: 100vh;
    min-width: 90vw;
    margin: 0 auto;
    grid-template-columns: 0.22fr 0.5fr 0.22fr;
    grid-template-areas: 
      "navbar feed sidebar";

    grid-gap: 0.5rem;
`

