import styled from "styled-components"

export const StyledUserContainer = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    border: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
    border-radius: 1rem;
    margin: 1rem 0.5rem;
`
