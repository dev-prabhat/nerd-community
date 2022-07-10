import { useSelector , useDispatch} from "react-redux"
import { FaEdit } from "react-icons/fa";
import styled from "styled-components";
import { NavBar, SinglePost , Aside, Header, InputTextBox} from "../components"
import { useDocument , useWindowScroll} from "../customHooks"
import { MainContainer, Feed, StyledIconButton} from "../styled.components"   
import { OpenPostModal } from "../features/modal/modalSlice";


const StyledCreateIconButton = styled(StyledIconButton)`
    position: fixed;
    bottom:15%;
    right:5%;
    display:none;
    background-color: ${({theme}) => theme.text};
    padding:1rem;
    border-radius:50%;
    font-size:1.5rem;
    @media screen and (max-width:${({theme}) => theme.breakpoints.tablet}){
        display:block;
    }

    @media screen and (max-width:${({theme}) => theme.breakpoints.mobile}){
        bottom:10%;
    }
`

export const Home = () => {
    useWindowScroll()
    useDocument("Home")
    const {posts}  = useSelector(state => state.post)
    const reversePosts = [...posts].reverse()
    const dispatch = useDispatch()

    return(
        <MainContainer className="position-rel">
            <Header/>
            <NavBar/>
            <Feed>
                <InputTextBox/>
                <div>
                    {
                        reversePosts.map(post => (
                                <SinglePost key={post._id} post={post}/>
                            ))
                    }
                </div>
            </Feed>
            <Aside/>
            <StyledCreateIconButton onClick={()=>dispatch(OpenPostModal())}>
                <FaEdit/>
            </StyledCreateIconButton>
        </MainContainer>
    )
}