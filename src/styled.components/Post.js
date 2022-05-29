import styled from "styled-components"

export const StyledPost = styled.div`
    border-radius: 8px;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid ${({theme}) => theme.colors.primaryThemeSecondShade};
    display: flex;
    align-items: flex-start;
`