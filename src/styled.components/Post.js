import styled from "styled-components"

const StyledPost = styled.div`
    border-radius: 8px;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid ${({theme}) => theme.colors.primaryThemeSecondShade};
`
const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const RowFlexContainer = styled(FlexContainer)`
    flex-direction: row;
`
export { StyledPost, FlexContainer, RowFlexContainer}
