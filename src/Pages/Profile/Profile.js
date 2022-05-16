import { NavBar } from "../../components"
import "../commonpage.css"

export const Profile = () => {
    return(
        <main className="page-main">
            <NavBar/>
            <div className="page-content">
                <h1>Profile</h1>
            </div>
            <aside className="sidebar">
                <h1>Aside</h1>
            </aside>
        </main>
    )
}