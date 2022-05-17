import { NavBar } from "../../components"
import "../commonpage.css"

export const Home = () => {
    return(
        <main className="page-main">
            <NavBar/>
            <div className="page-content">
                <h1>Home Page</h1>
            </div>
            <aside className="sidebar">
                <h1>Aside</h1>
            </aside>
        </main>
    )
}