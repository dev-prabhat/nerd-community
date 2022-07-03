import styled from "styled-components"


const StyledSearchWrapper = styled.div`
  width: 30%;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}){
    width: 50%;
  }
`

const StyledSearch = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({theme}) => theme.colors.darkThemeLighterColor};

  @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}){
    padding: 5px;
  }

  &:focus{
    outline: none;
  }
`
const StyledSearchUsersContainer = styled.div`
  position: absolute;
  height: 10rem;
  overflow-x: auto;
  width: 100%;
  background-color: ${({theme}) => theme.body};
  color:${({theme}) =>theme.text};
  z-index: 20;
  padding: 5px;
`
export {StyledSearch,StyledSearchWrapper,StyledSearchUsersContainer}