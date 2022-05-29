import { Aside, NavBar } from "../components"
import { MainContainer , Feed} from "../styled.components"


export const Profile = () => {
    return(
        <MainContainer>
            <NavBar/>
                <Feed>
                    <h1>Profile</h1>
                </Feed>
            <Aside/>
        </MainContainer>
    )
}