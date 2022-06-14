import ReactLoading from 'react-loading';
import { StyledLoaderWrapper } from "../styled.components/Loader"

export const Loader = () => {
    return(
        <StyledLoaderWrapper>
            <ReactLoading type={"spin"} color={"#ec1d24"} height={'10%'} width={'5%'} /> 
        </StyledLoaderWrapper>
    )
}