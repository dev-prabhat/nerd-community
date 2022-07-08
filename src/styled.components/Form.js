import styled from "styled-components"

const StyledForm = styled.form`
    width:98%;
`

const StyledRowForm = styled(StyledForm)`
    display:flex;
    align-items:center;
`
 
const StyledLabel = styled.label`
    color: ${({theme}) => theme.text};
`
export { StyledForm, StyledRowForm ,StyledLabel }