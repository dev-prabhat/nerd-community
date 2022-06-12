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
const StyledCommentWrapper = styled(RowFlexContainer)`
    margin: 1rem 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
`
const StyledComment = styled.p`
    font-size: 1rem;
    margin: 0.5rem;
`
export { StyledPost, FlexContainer, RowFlexContainer, StyledComment, StyledCommentWrapper}
