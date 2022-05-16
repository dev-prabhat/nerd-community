import { NavBar } from "../../components"
import "../commonpage.css"

export const Bookmark = () => {
    return(
        <main className="page-main">
            <NavBar/>
            <div className="page-content">
                <h1>Bookmark</h1>
            </div>
            <aside className="sidebar">
                <h1>Aside</h1>
            </aside>
        </main>
    )
}