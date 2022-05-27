import { Aside, NavBar } from "../../components"
import "../commonpage.css"

export const Bookmark = () => {
    return(
        <main className="page-main">
            <NavBar/>
            <div className="page-content">
                <h1>Bookmark</h1>
            </div>
            <aside className="sidebar">
                <Aside/>
            </aside>
        </main>
    )
}