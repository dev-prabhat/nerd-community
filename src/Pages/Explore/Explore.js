import { Aside, NavBar } from "../../components"
import "../commonpage.css"

export const Explore = () => {
    return(
        <main className="page-main">
            <NavBar/>
            <div className="page-content">
                <h1>Explore</h1>
            </div>
            <aside className="sidebar">
                <Aside/>
            </aside>
        </main>
    )
}