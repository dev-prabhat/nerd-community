import { Aside, NavBar } from "../../components"
import "../commonpage.css"

export const Profile = () => {
    return(
        <main className="page-main">
            <NavBar/>
            <div className="page-content">
                <h1>Profile</h1>
            </div>
            <aside className="sidebar">
                <Aside/>
            </aside>
        </main>
    )
}