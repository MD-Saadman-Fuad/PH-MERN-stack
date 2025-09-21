import { use } from "react"
import Post from "./post"
export default function Posts ({postPromise}){
    // console.log(postPromise)
    const posts = use(postPromise);
    return(
        <div className="card">
            <h1>All Posts are here {posts.length}</h1>
            {
                posts.map(post => <Post key={posts.id} post={post}></Post>)
            }
        </div>
    )
}