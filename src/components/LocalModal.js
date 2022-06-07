import { MdOutlineClose } from "react-icons/md";
import { StyledCloseButton, StyledModal, StyledModalWrapper } from "../styled.components"

export const LocalModal = ({children, isModal, CloseModal}) => {

    if(!isModal) return null
    return(
        <StyledModalWrapper>
            <StyledModal>
             {children}
             <StyledCloseButton onClick={()=>CloseModal(prev => !prev)}>
                 <MdOutlineClose/>
             </StyledCloseButton>
            </StyledModal>
        </StyledModalWrapper>
    )
}