import { Aside, NavBar } from "../components"
import { MainContainer , Feed} from "../styled.components"

export const Explore = () => {
    return(
        <MainContainer >
            <NavBar/>
                <Feed >
                    <h1>Explore</h1>
                </Feed>
            <Aside/>
        </MainContainer>
    )
}