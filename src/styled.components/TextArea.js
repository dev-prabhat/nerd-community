import styled from "styled-components"

const StyledTextAreaWrapper = styled.div`
    margin: 10px 0;
    padding: 5px;
    display: flex;
    align-items: flex-start;
    border: 1px solid ${({theme}) => theme.colors.darkThemeLightColor};
    border-radius: 8px;
    position: relative;
`

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    margin-top: 0;
    border: none;
    background-color: ${({theme}) => theme.colors.darkThemeLighterColor};
`
const StyledTextAreaWithBorder = styled(StyledTextArea)`
    border: 1px solid;
    padding: 8px;
    letter-spacing: 0;
    margin: 0.5rem 0;
`

export { StyledTextAreaWrapper, StyledTextArea ,StyledTextAreaWithBorder}