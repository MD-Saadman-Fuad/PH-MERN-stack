

export default function Post ({post}){
    return(
        <div className="card">
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </div>
    )
}