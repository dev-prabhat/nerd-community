import { NavBar } from "../../components"
import "../commonpage.css"

export const Explore = () => {
    return(
        <main className="page-main">
            <NavBar/>
            <div className="page-content">
                <h1>Explore</h1>
            </div>
            <aside className="sidebar">
                <h1>Aside</h1>
            </aside>
        </main>
    )
}