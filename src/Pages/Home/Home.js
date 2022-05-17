import { useEffect } from "react"
import { useDispatch , useSelector} from "react-redux"
import { getPosts } from "../../features/post/postSlice"
import { NavBar, SinglePost , Aside} from "../../components"
import "../commonpage.css"
import "./home.css"

export const Home = () => {
    const {posts,isLoading}  = useSelector(state => state.post)
    console.log(posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[])


    return(
        <main className="page-main">
            <NavBar/>
            <div className="page-content">
                <div className="form__wrapper"> 
                    <form >
                      <textarea className="form__field" rows="4" cols="50" required/>
                    </form>
                    <button className="btn btn-primary ">Post</button>
                </div>
                
                <div className="posts__wrapper">
                    {
                      isLoading ? <h1 className="text-center">loading...</h1> :
                        posts.map(post => (
                            <SinglePost key={post._id} {...post}/>
                        ))
                    }
                </div>
            </div>
            <aside className="sidebar">
               <Aside/>
            </aside>
        </main>
    )
}