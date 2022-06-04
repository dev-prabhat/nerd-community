import styled from "styled-components"

export const StyledPost = styled.div`
    border-radius: 8px;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid ${({theme}) => theme.colors.primaryThemeSecondShade};
`
export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const RowFlexContainer = styled(FlexContainer)`
    flex-direction: row;
`