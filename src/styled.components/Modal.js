import styled from "styled-components"

const StyledModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${({theme}) => theme.colors.modalBgColor};
    cursor: not-allowed;
    z-index: 22;
`

const StyledModal = styled.div`
    width: 30%;
    position: relative;
    cursor: auto;
    background-color: ${({theme}) => theme.colors.secondaryThemeColor};
    padding: 1rem;
`
const StyledCloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 5px;
    position: absolute;
    right: 2%;
    top: 2%;
    font-size: 1rem;
    cursor: pointer;
`

export  {StyledModalWrapper,StyledModal,StyledCloseButton}