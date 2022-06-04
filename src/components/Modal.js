import { useDispatch} from "react-redux"
import { MdOutlineClose } from "react-icons/md";
import { StyledModal, StyledModalWrapper ,StyledCloseButton} from "../styled.components"

export const Modal = ({children, isModal, CloseModal}) => {
    const dispatch = useDispatch()

    if(!isModal) return null
    return(
        <StyledModalWrapper>
            <StyledModal>
              {children}
              <StyledCloseButton onClick={()=>dispatch(CloseModal())}>
                  <MdOutlineClose/>
              </StyledCloseButton>
            </StyledModal>
        </StyledModalWrapper>
    )
}