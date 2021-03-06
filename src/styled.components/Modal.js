import styled from "styled-components"

const StyledModalWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({theme}) => theme.colors.modalBgColor};
    z-index: 30;
    min-height:100vh;
`

const StyledModal = styled.div`
    width: 30%;
    position: relative;
    margin: 4rem 0;
    cursor: auto;
    background-color: ${({theme}) => theme.body};
    padding: 1rem;

    @media screen  and (max-width:${({theme}) => theme.breakpoints.tablet}){
      width: 60%;
    }

    @media screen  and (max-width:${({theme}) => theme.breakpoints.mobile}){
      width: 95%;
    }

`
const StyledCloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 5px;
    margin:5px;
    position: absolute;
    right: 2%;
    top: 2%;
    font-size: 1rem;
    cursor: pointer;
`

export  {StyledModalWrapper,StyledModal,StyledCloseButton}